'use client';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import { useState, useRef } from 'react';
import Button from "@/components/Button/index";
import Input from "@/components/Input/index";
import useForm, { FormState } from "@/hooks/use-form/index";
import { setCookie } from "@/Cookie/index";
import { useRouter } from "next/navigation";
import '../login/login.css';

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  
  // Referências para cada formulário
  const registerFormRef = useRef<HTMLFormElement>(null);
  const loginFormRef = useRef<HTMLFormElement>(null);
  
  const initialRegisterForm = {
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    cpf: ''
  };

  const {
    data: {
      nome,
      email,
      senha,
      telefone,
      cpf,
    },
    loadingSubmit,
    handleChange,
    handleSubmit,
    errorsCount,
  } = useForm(
    registerFormRef,
    initialRegisterForm,
    registerCallback,
    registerErrorCallback
  );

  async function registerErrorCallback(error: Error) {
    if (error.cause && Object.keys(error.cause).length) {
      let message = "Erro ao realizar registro:\n\n"
      for (const key in error.cause) {
        const causes = error.cause as { [key: string]: string }
        message += `- ${causes[key]}\n`
      }
      return window.alert(message);
    }
    return window.alert(error.message);
  }

  async function registerCallback(values: FormState) {
    try {
      const request = await fetch(`/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: values.nome,
          email: values.email,
          senha: values.senha,
          telefone: values.telefone,
          cpf: values.cpf,
        }),
      });

      // Verifique se a resposta foi bem-sucedida
      if (!request.ok) {
        const errorResponse = await request.json();
        throw new Error(errorResponse.message || 'Erro ao realizar registro');
      }

      const response = await request.json();

      if (!response.token) {
        throw new Error(response.message);
      }

      setCookie('token', response.token);
      localStorage.setItem('token', response.token);
      router.push('/');

    } catch (error) {
      if (error instanceof Error) {
        return registerErrorCallback(error);
      }
      return registerErrorCallback(new Error('Erro ao realizar registro'));
    }
  }

  const initialLoginForm = {
    email: '',
    senha: ''
  };

  const {
    data: {
      email: loginEmail,
      senha: loginSenha
    },
    loadingSubmit: loadingLogin,
    handleChange: handleLoginChange,
    handleSubmit: handleLoginSubmit,
    errorsCount: loginErrorsCount
  } = useForm(
    loginFormRef,
    initialLoginForm,
    loginCallback,
    loginErrorCallback
  );

  async function loginErrorCallback(error: Error) {
    if (error.cause && Object.keys(error.cause).length) {
      let message = 'Erro ao realizar login:\n\n';
      for (const key in error.cause) {
        const causes = error.cause as { [key: string]: string }
        message += `- ${causes[key]}\n`;
      }
      return window.alert(message);
    }
    return window.alert(error.message);
  }

  async function loginCallback(values: FormState) {
    try {
      const request = await fetch(`/api/login?email=${encodeURIComponent(values.email)}&senha=${encodeURIComponent(values.senha)}`, {
        method: 'GET',
      });
      
      // Verifique se a resposta foi bem-sucedida
      if (!request.ok) {
        const errorResponse = await request.json();
        throw new Error(errorResponse.message || 'Erro ao realizar login');
      }
      
      const response = await request.json();

      if (!response.token || !response.codigo) {
        throw new Error(response.message);
      }

      setCookie('token', response.token);
      localStorage.setItem('token', response.token);
      localStorage.setItem('codigo', response.codigo);
      router.push('/');

    } catch (error) {
      if (error instanceof Error) {
        return loginErrorCallback(error);
      }
      return loginErrorCallback(new Error('Erro ao realizar login'));
    }
  }

  return (
    <>
      <Header />
      <section>
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
          <div className={`form-container sign-up ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} ref={registerFormRef} noValidate>
              <h1>Criar Conta</h1>
              <span>ou use seu e-mail para registro</span>
              <Input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome completo"
                value={nome}
                handleChange={(_, e) => handleChange(e)}
                required
              />
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                value={email}
                handleChange={(_, e) => handleChange(e)}
                required
              />
              <Input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                minLength={6}
                value={senha}
                handleChange={(_, e) => handleChange(e)}
                required
              />
              <Input
                type="text"
                name="telefone"
                id="telefone"
                placeholder="Telefone"
                value={telefone}
                handleChange={(_, e) => handleChange(e)}
                required
              />
              <Input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="CPF"
                value={cpf}
                handleChange={(_, e) => handleChange(e)}
                required
              />
              <Button type="submit" disabled={loadingSubmit || !!errorsCount || !registerFormRef.current}>
                {loadingSubmit ? "Carregando..." : "Cadastrar"}
              </Button>
            </form>
          </div>
          <div className={`form-container sign-in ${isActive ? 'opacity-0' : 'opacity-100'}`}>
            <form onSubmit={handleLoginSubmit} ref={loginFormRef} noValidate>
              <h1>Login</h1>
              <Input
                label='E-mail'
                type='email'
                name='email'
                id='email'
                placeholder='E-mail'
                value={loginEmail}
                handleChange={(_, e) => handleLoginChange(e)}
                required
              />
              <Input
                label='Senha'
                type='password'
                name='senha'
                id='senha'
                placeholder='Senha'
                minLength={6}
                value={loginSenha}
                handleChange={(_, e) => handleLoginChange(e)}
                required
              />
              <a href="#">Esqueceu sua Senha?</a>
              <Button type="submit" disabled={loadingLogin || !!loginErrorsCount || !loginFormRef.current}>
                {loadingLogin ? 'Carregando...' : 'Entrar'}
              </Button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Bem-vindo de Volta!</h1>
                <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                <button onClick={() => setIsActive(false)}>Entrar</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Olá, Amigo!</h1>
                <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                <button onClick={() => setIsActive(true)}>Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
