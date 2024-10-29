
'use client';
import Header from '@/components/header/page';
import '../login/login.css';
import { useState } from 'react';
import Footer from '@/components/footer/page';

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Header />
      <section className="flex justify-center items-center h-screen">
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
          <div className={`form-container sign-up ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <form>
              <h1>Criar Conta</h1>
              <span>ou use seu e-mail para registro</span>
              <input type="usuario" placeholder="Nome" />
              <input type="password" placeholder="Senha" />
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Telefone" />
              <input type="text" placeholder="CPF" />
              <button type="button">Cadastrar</button>
            </form>
          </div>
          <div className={`form-container sign-in ${isActive ? 'opacity-0' : 'opacity-100'}`}>
            <form>
              <h1>Login</h1>
              <input type="usuario" placeholder="Nome" />
              <input type="password" placeholder="Senha" />
              <a href="#">Esqueceu sua Senha?</a>
              <button type="button">Entrar</button>
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

