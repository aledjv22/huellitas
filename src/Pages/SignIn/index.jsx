import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import Layout from "../../Components/Layout";
import check from '../../Images/checkmark.svg';

function SignIn () {
  const { setIsLoggedIn } = useContext(HuellitasContext);

  const styles = 'bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isEmailAndPasswordValid, setIsEmailAndPasswordValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://db-huellitas-0308351800f8.herokuapp.com/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email:email, 
        password:password
      })
    });
    if (response.ok) { 
      const newUser = await response.json();
      setLoginSuccess(true); 
      setIsLoggedIn(true);
      console.log(newUser);
    } else if (response.status === 401) {
      setIsEmailAndPasswordValid(false);
    }
  }

  const renderForm = () => {
    return (
      <>
        <div className='flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]'>
          <h1>Bienvenido de nuevo</h1>
        </div>
  
        <form className='flex flex-col w-[300px] font-bold text-[#86155f]'
        onSubmit={handleSubmit}
        >
  
          <label htmlFor="email">
            Correo: {isEmailAndPasswordValid ? '' : 'Correo y/o contraseña invalida'}
          </label>
          <input type="email" value={email} 
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailAndPasswordValid(true);
          }} 
          placeholder="ejemplo@email.com" required id='email'
          className={styles}
          htmlFor='email' autoComplete='email' 
          />
  
          <label htmlFor="password">
            Contraseña:
          </label>
          <input type="password" value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="******" required id='password'
          className={styles}
          htmlFor='password' autoComplete='current-password'
          />
  
          <button type="submit"
          className='bg-gradient-to-r from-[#e022a7] to-[#a11371] 
          hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
          text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3'
          >
            Iniciar sesión
          </button>
        </form>
      </>
    )
  }

  const renderSuccess = () => {
    return (
      <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h2 className='text-3xl font-bold text-[#86155f]'> 
        Inicio de sesión exitoso 
        </h2>
        <img src={check} alt="check" className='w-20 h-20 mb-4'/>
        <button
          className='bg-gradient-to-r from-[#e022a7] to-[#a11371] 
          hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
          text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3'
          >
            <Link to='/huellitas/'>
              Ir al inicio
            </Link>
          </button>
      </div>
    )
  }

  return (
    <Layout>
      {
      loginSuccess ? 
      renderSuccess() :
      renderForm()
      }
    </Layout>
  );
}

export default SignIn;