import { ChangeEvent, FormEvent, RefObject, useCallback, useEffect, useState } from 'react';

export interface FormState {
  [key: string]: any;
}

interface ErrorsState {
  [key: string]: string;
}

type SetCustomErrorsFunction = (target: HTMLFormElement) => ErrorsState;

type SubmitCallbackFunction = (values: FormState, target?: FormEvent<HTMLFormElement>) => Promise<void>;

export default function useForm(
  formRef: RefObject<HTMLFormElement>,
  initialState: FormState,
  submitCallback: SubmitCallbackFunction,
  errorCallback?: (error: Error) => Promise<void>,
  setCustomErrors?: SetCustomErrorsFunction, 
) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorsState>({});
  const [errorsCount, setErrorsCount] = useState(0);
  const form = formRef.current;

  useEffect(() => {
    handleErros();
  }, [form]);

  const countErrors = (errorsObject: ErrorsState) => {
    const count = Object.keys(errorsObject).length;
    setErrorsCount(count);
    return count;
  };

  const validateDefault = useCallback(() => {
    if (form === null) {
      return {};
    }
    const formData = new FormData(form);
    const isFormValid = form.checkValidity();

    const newErrors: ErrorsState = {};
    if (!isFormValid) {
      const entries = Array.from(formData.entries()); 
      for (const [name] of entries) {
        const element = form.elements.namedItem(name);
        if (element instanceof HTMLInputElement) {
          newErrors[name] = element.validationMessage;
        }
      }
    }
    return newErrors;
  }, [form]);

  const handleErros = useCallback(async () => {
    if (form === null) {
      return { validationErrors: {}, count: 0 };
    }
    const newErrors = validateDefault();
    const customErrors = setCustomErrors?.(form);
    const validationErrors = {
      ...newErrors,
      ...customErrors
    };
    setErrors(validationErrors);
    const count = countErrors(validationErrors);

    return {
      validationErrors,
      count
    };
  }, [validateDefault, setCustomErrors, form]);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    const { count, validationErrors } = await handleErros();
    if (count) {
      setLoading(false);
      if (errorCallback instanceof Function) {
        await errorCallback(new Error('Invalid Form', {
          cause: {
            ...validationErrors
          }
        }));
      }
      return;
    }

    await submitCallback(data, e);

    setLoading(false);
  }, [loading, handleErros, submitCallback, data, errorCallback]);

  const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((oldData) => {
      return {
        ...oldData,
        [name]: value
      };
    });

    await handleErros();
  }, [handleErros]);

  return {
    data,
    errors,
    errorsCount,
    loadingSubmit: loading,
    handleChange,
    handleSubmit
  };
}
