import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import { useChangePassword } from '../../Utils/Users/changePassword';
import Layout from '../../Components/Layout';
import check from '../../Images/checkmark.svg';

function Recovery () {
  const {
    API_URL,
    isLoggedIn
  } = useContext(HuellitasContext);

  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [token, setToken] = useState(null);

  const stylesInput = `bg-transparent border-2 border-[#86155f] 
  outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2 placeholder:font-bold`;
  const stylesButton = `bg-gradient-to-r from-[#e022a7] to-[#a11371] 
  hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
  text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3`;

  const changePassword = useChangePassword(API_URL);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    setToken(tokenFromUrl.toString());
  }, [token]);

  const renderSuccess = () => {
    return (
      <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h2 className='text-3xl font-bold text-[#86155f]'> 
          Cambio de contraseña exitoso
        </h2>

        <img src={check} alt='check' className='w-20 h-20 mb-2'/>

        <button className={stylesButton}>
          <Link to='/huellitas/sign-in'>
            Ir a iniciar sesión
          </Link>
        </button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token === null){
      alert('No se ha enviado el token');
      return;
    }
    
    if(newPassword !== confirmedPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    changePassword(newPassword, token, setNewPassword, setConfirmedPassword);
    console.log('paso todo')
  }

  const renderForm = () => {
    return (
      <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h2 className='text-3xl font-bold text-[#86155f] mb-2'> 
          Cambio de contraseña
        </h2>

        <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
          <input type='password' id='password' required
          placeholder='Nueva contraseña' className={stylesInput}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}/>
          
          <input type='password' id='confirmed-password' required
          placeholder='Confirmar contraseña' className={stylesInput}
          onChange={(e) => {
            setConfirmedPassword(e.target.value);
          }}/>

          <button type='submit' className={stylesButton}>
            Cambiar contraseña
          </button>
        </form>
      </div>
    );
  }
  
  return (
    <Layout>
      {
      isLoggedIn?
      renderSuccess()
      :
      renderForm()
      }
    </Layout>
  );
}

export default Recovery;