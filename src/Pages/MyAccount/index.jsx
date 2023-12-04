import React from 'react';
import { Link } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import { getUsers } from '../../Utils/Users/getUsers';
import Layout from '../../Components/Layout';
import Banner from '../../Components/Banner';
import UserData from '../../Components/UserData';
import UserEdition from '../../Components/UserEdition';

function MyAccount () {
  const {
    setIsLoggedIn,
    userLogged,
    setUserLogged,
    API_URL,
  } = React.useContext(HuellitasContext);

  const { users } = getUsers(API_URL);
  const [isEditing, setIsEditing] = React.useState(false);
  
  const renderOptions = () => (
    <ul className='flex flex-col h-screen bg-[#f86ed9] font-medium text-base text-[#520538]'>
      <li 
      className='my-1 px-2 hover:bg-[#f143c6]'
      >
        Datos Personales:
      </li>

      <li 
      onClick={() => setIsEditing(true)} 
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
            <UserEdition users={users}
            user={userLogged.user} 
            setIsEditing={setIsEditing}
            API_URL={API_URL}
            userLogged={userLogged}
            setUserLogged={setUserLogged}
            /> 
            :
            <UserData 
            id={userLogged.user.id} 
            token={userLogged.token}
            API_URL={API_URL}
            userLogged={userLogged}
            setUserLogged={setUserLogged}/>
          }
        </div>

        <div></div>
      </div>
    </Layout>
  )
}

export default MyAccount;