import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import { useLoginUser } from '../../Utils/Users/loginUser';
import { useRecoveryPassword } from '../../Utils/Users/recoveryPassword';
import Layout from "../../Components/Layout";
import check from '../../Images/checkmark.svg';

function SignIn () {
  const { 
    setIsLoggedIn,
    setUserLogged,
    API_URL
  } = useContext(HuellitasContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isEmailAndPasswordValid, setIsEmailAndPasswordValid] = useState(true);
  const [isRecorveringPassword, setIsRecorveringPassword] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isShortRequest, setIsShortRequest] = useState(false);
  
  const styles = 'bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2';

  const loginUser = useLoginUser(API_URL);
  const recoveryPassword = useRecoveryPassword(API_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(
      setIsLoggedIn,
      setUserLogged,
      setLoginSuccess, 
      setIsEmailAndPasswordValid, 
      email, 
      password
    );
  }

  const recoveryRequest = async (e) => {
    e.preventDefault();
    recoveryPassword(email, setIsEmailSent, setEmail, setIsShortRequest);
  }
  
  const renderRecoverPassword = () => {
    return (
      <>
        <div className='flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]'>
          <h1>Recuperar contraseña</h1>
        </div>

        {
        isEmailSent
        ?
        <div>
          <p className='flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]'>
            Revise su correo
          </p>

          <button type='button'
          className='bg-gradient-to-r from-[#e022a7] to-[#a11371] 
          hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
          text-[#fccef4] font-bold rounded-lg w-[300px] mb-2 py-2'
          onClick={() => {
            setLoginSuccess(false);
            setIsRecorveringPassword(false);
            setIsEmailSent(false);
          }}
          >
            Ir a loguearse
          </button>
        </div>
        :
        <form className='flex flex-col w-[300px] font-bold text-[#86155f]'
        onSubmit={recoveryRequest}
        >
          <label htmlFor='email'
          className='w-full flex justify-center mb-2'
          >
            Ingrese su correo:
          </label>

          {isShortRequest?
          <p className='flex flex-col items-center mb-2 text-[#e022a7] font-bold text-base'>
            <p>Ya tiene un correo enviado.</p>
            <p>Espere 15 minutos para volver a enviar</p>
          </p>:undefined}

          <input type='email' value={email}
          className={styles} placeholder='Email'
          autoComplete='email' htmlFor='email' id='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }} />

          <button type="submit"
          className='bg-gradient-to-r from-[#e022a7] to-[#a11371] 
          hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
          text-[#fccef4] font-bold rounded-lg w-[300px] mb-2 py-2'
          >
            Recuperar
          </button>

          <div className='flex mb-2 text-sm justify-center hover:text-[#e022a7]'>
            <button type='button'
            onClick={() => {
              setIsRecorveringPassword(false);
              setIsShortRequest(false);
            }}> 
              Volver para iniciar sesión 
            </button>
          </div>
        </form>
        }
      </>
    );
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

          <div className='flex mb-2 text-sm justify-center hover:text-[#e022a7]'>
            <button onClick={() => {
              setIsRecorveringPassword(true);
              setEmail('');
            }}> 
              ¿Olvidaste tu contraseña? 
            </button>
          </div>
  
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
      isRecorveringPassword ?
      renderRecoverPassword() :
      renderForm()
      }
    </Layout>
  );
}

export default SignIn;