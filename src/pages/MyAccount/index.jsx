import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HuellitasContext } from "../../context";
import { useGetUsers } from "../../utils/Users/getUsers";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import UserData from "../../components/UserData";
import UserEdition from "../../components/UserEdition";
import Card from "../../components/Card";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 915);

  const getUsers = useGetUsers(API_URL);

  const styleOptions = "w-full my-1 px-2 hover:bg-[#f143c6] flex flex-col";

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

  useEffect(() => {
    setIsMobile(window.innerWidth < 915);
  }, [window.innerWidth]);
  
  const renderOptions = () => (
    <ul 
    className={`flex ${isMobile?
    "w-full flex-row bg-[#f86ed9] font-medium text-base text-[#520538] justify-evenly" : 
    "flex-col min-h-screen w-[144px] bg-[#f86ed9] font-medium text-xl text-[#520538]"}`}>
      <li 
      className={`${styleOptions} 
      ${isMobile ? "w-auto hover:rounded-md justify-center" : ""}`}
      onClick={() => {
        setIsWatchingPets(false);
        setIsEditing(false);
      }}>
        Datos <br/> Personales:
      </li>

      <li 
      className={`${styleOptions} 
      ${isMobile ? "w-auto hover:rounded-md justify-center" : ""}`}
      onClick={() => {
        setIsWatchingPets(false);
        setIsEditing(true);
      }} >
        Editar <br/> Perfil:
      </li>

      <li 
      className={`${styleOptions} 
      ${isMobile ? "w-auto hover:rounded-md justify-center" : ""}`}
      onClick={() => {
        setIsWatchingPets(true);
        setIsEditing(false);
      }}>
        Mis <br/> Mascotas:
      </li>

      <li 
        onClick={() => {
          setUserLogged(null);
          setIsLoggedIn(false);
        }}
        className={`my-1 mx-1 hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] rounded-3xl flex justify-center items-center hover:text-[#fccef4] ${isMobile ? "py-1 px-4" : ""}`}
      >
        <Link to="/">
          Cerrar 
          <br
          className="h-0 w-0"
          />
          sesión
        </Link>
      </li>
    </ul>
  )

  return (
    <Layout>
      <Banner photo={ userLogged.user.image }/>
      <div className="flex justify-between w-full">
        <div className={`flex ${isMobile ? "flex-col w-full" : "flex-grow"}`}>
          { renderOptions() }

          { 
            !isEditing && !isWatchingPets &&
            (<div className={`${isMobile ? "w-full flex flex-col items-center" : ""}`}>
              <UserData 
              id={userLogged.user.id} 
              token={userLogged.token}
              API_URL={API_URL}
              userLogged={userLogged.user}
              setUserLogged={setUserLogged}/>
            </div>)
          }

          { 
            isWatchingPets && 
            <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center flex-grow">
              {myPets.map(pet => (
                  <Link to={`/pet/${pet.id}`} key={pet.id}>
                    <Card pet={pet} key={pet.id}/>
                  </Link>
                ))}
            </div>
          }

          {
            isEditing &&
            (<div className={`${isMobile ? "w-full flex flex-col items-center" : ""}`}>
              <UserEdition users={users}
              user={userLogged.user} 
              setIsEditing={setIsEditing}
              API_URL={API_URL}
              userLogged={userLogged}
              setUserLogged={setUserLogged}
              /> 
            </div>)
          }

        </div>

        {!isMobile && <div></div>}
      </div>
      <Helmet>
        <title> Huellitas | Mi Cuenta </title>
      </Helmet>
    </Layout>
  )
}

export default MyAccount;