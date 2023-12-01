import React from 'react';
import { Link } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import Layout from '../../Components/Layout';
import Banner from '../../Components/Banner';
import UserData from '../../Components/UserData';

function MyAccount () {
  const {
    setIsLoggedIn,
    userLogged,
    setUserLogged
  } = React.useContext(HuellitasContext);
  
  const [isEditing, setIsEditing] = React.useState(false);
  
  const renderOptions = () => (
    <ul className='flex flex-col h-screen bg-[#f86ed9] font-medium text-base text-[#520538]'>
      <li 
      onClick={() => setIsEditing(!isEditing)} 
      className='my-1 px-2 hover:bg-[#f143c6]'
      >
        Datos Personales:
      </li>

      <li 
      onClick={() => setIsEditing(!isEditing)} 
      className='my-1 px-2 hover:bg-[#f143c6]'
      >
        Editar Perfil:
      </li>

      <li 
        onClick={() => {
          setUserLogged(null);
          setIsLoggedIn(false);
        }}
        className='my-1 mx-3 hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] rounded-3xl flex justify-center'
      >
        <Link to='/huellitas/'>
          Cerrar sesión
        </Link>
      </li>
    </ul>
  )

  return (
    <Layout>
      <Banner photo={ userLogged.user.image }/>
      <div className='flex justify-between w-full'>
        <div className='flex'>
          { renderOptions() }

          {
            isEditing ?
            null :
            <UserData user={userLogged.user}/>
          }
        </div>

        <div></div>
      </div>
    </Layout>
  )
}

export default MyAccount;