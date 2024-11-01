'use client';
import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../login/login.css';

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  function handleSignIn(data: any) {
    console.log(data); 
  }

  async function handleRegister(data: any) {
    try {
      console.log(data); 
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  }

  // Reseta os campos do formulário ao mudar entre login e cadastro
  const toggleForm = (isSignUp: any) => {
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
              <input {...register('registerUser')} id='registerUser' type="text" placeholder="Nome" />
              <input {...register('registerSenha')} id='registerSenha' type="password" placeholder="Senha" />
              <input {...register('email')} id='email' type="email" placeholder="Email" />
              <input {...register('telefone')} id='telefone' type="text" placeholder="Telefone" />
              <input {...register('cpf')} id='cpf' type="text" placeholder="CPF" />
              <button type="submit">Cadastrar</button>
            </form>
          </div>
          <div className={`form-container sign-in ${isActive ? 'opacity-0' : 'opacity-100'}`}>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <h1>Login</h1>
              <input {...register('loginUser')} id='loginUser' type="text" placeholder="Nome" />
              <input {...register('loginSenha')} id='loginSenha' type="password" placeholder="Senha" />
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

//Codigo antes da alteração 
// 'use client';
// import Header from '@/components/header/page';
// import '../login/login.css';
// import { useState } from 'react';
// import Footer from '@/components/footer/page';
// import {useForm} from'react-hook-form';

// export default function Login() {
//   const [isActive, setIsActive] = useState(false);
//   const {register, handleSubmit} = useForm ();
//   function handleSignIn (data:any) {
//     console.log(data)
//   }
//   async function handleRegister(data: any) {
//     try {
//         console.log(data);
//     } catch (error) {
//         console.error("Erro ao cadastrar:", error);
//     }
// }

  
//   return (
//     <>
//       <Header />
//       <section className="flex justify-center items-center h-screen">
//         <div className={container ${isActive ? 'active' : ''}} id="container">
//           <div className={form-container sign-up ${isActive ? 'opacity-100' : 'opacity-0'}}>
//             <form onSubmit={handleSubmit(handleRegister)}>
//               <h1>Criar Conta</h1>
//               <span>ou use seu e-mail para registro</span>
              
//               <input {...register('user')}id='user' type="usuario" placeholder="Nome"/>
//               <input {...register('senha')}id='senha' type="password" placeholder="Senha"/>
//               <input {...register('email')}id='email' type="email" placeholder="email"/>
//               <input {...register('telefone')}id='telefone' type="text" placeholder="Telefone"/>
//               <input {...register('cpf')}id='cpf' type="text" placeholder="CPF"/>
//               {/* <input type="password" placeholder="Senha" />
//               <input type="email" placeholder="E-mail" />
//               <input type="text" placeholder="Telefone" />
//               <input type="text" placeholder="CPF" /> */}
//               <button type="submit">Cadastrar</button>
//             </form>
//           </div>
//           <div className={form-container sign-in ${isActive ? 'opacity-0' : 'opacity-100'}}>
//             <form onSubmit={handleSubmit(handleSignIn)}>
//               <h1>Login</h1>
//               <input {...register('user')}id='user' type="usuario" placeholder="Nome"/>
//               <input {...register('senha')}id='senha' type="password" placeholder="Senha"/>
//               {/* <input id='user' type="usuario" placeholder="Nome" />
//               <input type="password" placeholder="Senha" /> */}
//               <a href="#">Esqueceu sua Senha?</a>
//               <button type="submit">Entrar</button>
//             </form>
//           </div>
//           <div className="toggle-container">
//             <div className="toggle">
//               <div className="toggle-panel toggle-left">
//                 <h1>Bem-vindo de Volta!</h1>
//                 <p>Insira seus dados pessoais para usar todos os recursos do site</p>
//                 <button onClick={() => setIsActive(false)}>Entrar</button>
//               </div>
//               <div className="toggle-panel toggle-right">
//                 <h1>Olá, Amigo!</h1>
//                 <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
//                 <button onClick={() => setIsActive(true)}>Cadastrar</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }
