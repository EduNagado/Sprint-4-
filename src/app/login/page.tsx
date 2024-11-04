'use client';

import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext'; 
import { registerUser } from '@/services/api'; 
import { RegisterResponse } from '@/services/axios'; 
import '../login/login.css';

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
  telefone: string;
  cpf: string;
};

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const { register, handleSubmit, reset } = useForm<RegisterData>();
  const { signIn } = useContext(AuthContext); 


  const handleSignIn: SubmitHandler<LoginData> = async (data) => {
    try {
      await signIn(data);
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  };


  const handleRegister: SubmitHandler<RegisterData> = async (data) => {
    try {
      const response: RegisterResponse = await registerUser(data);
      console.log(response.message);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };


  const toggleForm = (isSignUp: boolean) => {
    setIsActive(isSignUp);
    reset();
  };

  return (
    <>
      <Header />
      <section className="flex justify-center items-center h-screen">
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
          <div className={`form-container sign-up ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit(handleRegister)}>
              <h1>Criar Conta</h1>
              <span>ou use seu e-mail para registro</span>
              <input {...register('name')} type="text" placeholder="Nome" required />
              <input {...register('email')} type="email" placeholder="Email" required />
              <input {...register('password')} type="password" placeholder="Senha" required />
              <input {...register('telefone')} type="text" placeholder="Telefone" required />
              <input {...register('cpf')} type="text" placeholder="CPF" required />
              <button type="submit">Cadastrar</button>
            </form>
          </div>

          <div className={`form-container sign-in ${isActive ? 'opacity-0' : 'opacity-100'}`}>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <h1>Login</h1>
              <input {...register('email')} type="email" placeholder="Email" required />
              <input {...register('password')} type="password" placeholder="Senha" required />
              <a href="#">Esqueceu sua Senha?</a>
              <button type="submit">Entrar</button>
            </form>
          </div>

          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Bem-vindo de Volta!</h1>
                <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                <button onClick={() => toggleForm(false)}>Entrar</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Olá, Amigo!</h1>
                <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                <button onClick={() => toggleForm(true)}>Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
