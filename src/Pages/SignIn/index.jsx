import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordRecoveryForm from '../../Components/PasswordRecoveryForm';
import { HuellitasContext } from '../../Context';
import { useLoginUser } from '../../Utils/Users/loginUser';
import Layout from '../../Components/Layout';
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
  
  const stylesInput = `bg-transparent border-2 border-[#86155f] 
  outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2`;
  const stylesButton = `bg-gradient-to-r from-[#e022a7] to-[#a11371] 
  hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
  text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3`;

  const loginUser = useLoginUser(API_URL);

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

  const renderForm = () => {
    return (
      <>
        <div className='flex items-center justify-center relative w-80 my-2 
        text-2xl font-bold text-[#86155f]'>
          <h1>Bienvenido de nuevo</h1>
        </div>
  
        <form className='flex flex-col w-[300px] font-bold text-[#86155f]'
        onSubmit={handleSubmit}
        >
  
          <label htmlFor='email'>
            Correo: {isEmailAndPasswordValid ? '' : 'Correo y/o contraseña invalida'}
          </label>
          <input type='email' value={email} 
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailAndPasswordValid(true);
          }} 
          placeholder='ejemplo@email.com' required id='email'
          className={stylesInput}
          htmlFor='email' autoComplete='email' 
          />
  
          <label htmlFor='password'>
            Contraseña:
          </label>
          <input type='password' value={password} 
            placeholder='******' id='password'
            className={stylesInput} required
            htmlFor='password' autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)} 
          />

          <div className='flex mb-2 text-sm justify-center hover:text-[#e022a7]'>
            <button type='button'
            onClick={() => {
              setIsRecorveringPassword(true);
              setEmail('');
            }}> 
              ¿Olvidaste tu contraseña? 
            </button>
          </div>
  
          <button type='submit' className={stylesButton}>
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

        <img src={check} alt='check' className='w-20 h-20 mb-4'/>

        <button className={stylesButton}>
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
      renderSuccess() 
      :
      isRecorveringPassword ?
      <PasswordRecoveryForm 
        API_URL={API_URL} 
        stylesInput={stylesInput} 
        setIsRecorveringPassword={setIsRecorveringPassword}
        setLoginSuccess={setLoginSuccess}
      /> 
      :
      renderForm()
      }
    </Layout>
  );
}

export default SignIn;