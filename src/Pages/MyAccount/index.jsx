import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import { useGetUsers } from '../../Utils/Users/getUsers';
import Layout from '../../Components/Layout';
import Banner from '../../Components/Banner';
import UserData from '../../Components/UserData';
import UserEdition from '../../Components/UserEdition';
import Card from '../../Components/Card';

function MyAccount () {
  const {
    setIsLoggedIn,
    userLogged,
    setUserLogged,
    API_URL,
  } = useContext(HuellitasContext);

  const [users, setUsers] = useState(null);
  const [myPets, setMyPets] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isWatchingPets, setIsWatchingPets] = useState(false);

  const getUsers = useGetUsers(API_URL);

  const styleOptions = 'my-1 px-2 hover:bg-[#f143c6]';

  const getMyPets = async () => {
    const response = await fetch(`${API_URL}/pets`);
    const data = await response.json();
    const myPets = data.filter(pet => pet.userId === userLogged.user.id);
    setMyPets(myPets);
  }

  useEffect(() => {
    getMyPets();
  }
  , [myPets]);

  useEffect(() => {
    getUsers(setUsers);
  }, [users]);
  
  const renderOptions = () => (
    <ul className='flex flex-col min-h-screen w-[144px] bg-[#f86ed9] font-medium text-base text-[#520538]'>
      <li className={styleOptions}
      onClick={() => {
        setIsWatchingPets(false);
        setIsEditing(false);
      }}>
        Datos Personales:
      </li>

      <li className={styleOptions}
      onClick={() => {
        setIsWatchingPets(false);
        setIsEditing(true);
      }} >
        Editar Perfil:
      </li>

      <li className={styleOptions}
      onClick={() => {
        setIsWatchingPets(true);
        setIsEditing(false);
      }}>
        Mis Mascotas:
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
        <div className='flex flex-grow'>
          { renderOptions() }

          { 
            !isEditing && !isWatchingPets &&
            <UserData 
            id={userLogged.user.id} 
            token={userLogged.token}
            API_URL={API_URL}
            userLogged={userLogged.user}
            setUserLogged={setUserLogged}/>
          }

          { 
            isWatchingPets && 
            <div className='px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center flex-grow'>
              {myPets.map(pet => (
                  <Link to={`/huellitas/pet/${pet.id}`} key={pet.id}>
                    <Card pet={pet} key={pet.id}/>
                  </Link>
                ))}
            </div>
          }

          {
            isEditing &&
            <UserEdition users={users}
            user={userLogged.user} 
            setIsEditing={setIsEditing}
            API_URL={API_URL}
            userLogged={userLogged}
            setUserLogged={setUserLogged}
            /> 
          }

        </div>

        <div></div>
      </div>
    </Layout>
  )
}

export default MyAccount;