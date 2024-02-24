import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetUser } from "../../utils/Users/getUser";
import { useGetPet } from "../../utils/Pets/getPet";
import { useDeletePet } from "../../utils/Pets/deletePet";
import { HuellitasContext } from "../../context";
import Layout from "../../components/Layout";
import PetEdition from "../../components/PetEdition";
import ContactForm from "../../components/ContactForm";
import Gallery from "../../components/Gallery";
import check from "../../assets/checkmark.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import whatsapp from "../../assets/whatsapp.svg";
import mail from "../../assets/mail.svg";

function PetDetail () {
  const { 
    userLogged,
    isLoggedIn,
    API_URL,
    setPets
  } = useContext(HuellitasContext);

  const getUser = useGetUser(API_URL);
  const getPet = useGetPet(API_URL);
  const deletePet = useDeletePet(API_URL);

  const [user, setUser] = useState(null);
  const [pet, setPet] = useState(null);
  const [message, setMessage] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 915);

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const petId = pathSegments[pathSegments.length - 1];
    getPet(petId, setPet, setIsEditing);
  }, [setPet]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser(pet?.userId);
      setUser(userData);
    };

    if (pet) fetchUserData();
  }, [pet]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 915);
  } , [window.innerWidth]);

  useEffect(() => {
    {pet && pet.state === "En adopción" && 
    setMessage(`¡Enamórate de ${pet.name} en Huellitas! ¿Podrías ser su nueva familia?`)}

    {pet && pet.state === "Perdido" &&
    setMessage(`¡Ayudanos a encontrar a ${pet.name}!`)}

    {pet && pet.state === "Adoptado" &&
    setMessage(`¡${pet.name} encontró su familia!`)}

    {pet && pet.state === "Encontrado" &&
    setMessage(`${pet.name} fue encontrado.`)}
  }, [pet]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  const styleButton = `bg-[#86155f] text-[#fccef4] font-bold p-2 m-2 rounded-md transform 
  hover:scale-105 transition-transform duration-300`;

  const renderButtons = () => {
    return (
      <div className="flex flex-row w-full justify-evenly">
        <button className={styleButton}
        onClick={() => {
          setIsEditing(true);
        }}>
          Editar
        </button>

        <button className={styleButton}
        onClick={async () => await deletePet(pet.id, userLogged.token, setPets, setDeleteSuccess)}>
          Eliminar
        </button>
      </div>
    );
  }

  const renderDeleteSuccess = () => {
    return (
      <div className="flex flex-col w-screen h-screen items-center justify-center">
        <h2 className="text-3xl font-bold text-[#86155f]"> 
          Eliminación exitosa 
        </h2>

        <img src={check} alt="check" className="w-20 h-20 mb-4"/>
        
        <Link to="/">
          <button className={`bg-gradient-to-r from-[#e022a7] to-[#a11371] 
            hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371]  
            text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3`}>
              Inicio
          </button>
        </Link>
      </div>
    );
  }

  const renderView = () => {
    return (
      <article className={`flex flex-col items-center text-[#86155f] 
      ${isMobile ? "w-[400px]" : "w-[500px]"}`}>
        {isLoggedIn &&
        userLogged.user.id === pet.userId &&
        renderButtons()}
        <div className={`w-full flex justify-between px-3 
        ${isMobile ? "flex-col items-center" : "flex-row"}`}>
          <h2 className="text-3xl font-bold underline">
            {pet.name}
          </h2>
          <div className="flex flex-row justify-evenly mx-1 w-[150px]">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col justify-center"
              title="Compartir en Facebook">
              <img src={facebook} alt="icono de facebook" className="w-[35px]"/>
            </a>

            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center"
            title="Compartir en Twitter">
              <img src={twitter} alt="icono de twitter" className="w-[25px]"/>
            </a>

            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%20${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center" 
            title="Compartir en WhatsApp">
              <img src={whatsapp} alt="icono de whatsapp" className="w-[25px]"/>
            </a>

            <a href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&su=Compartir%20enlace&body=${encodeURIComponent(message)}%20${encodeURIComponent(window.location.href)}&tf=1`} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center"
            title="Compartir por mail">
              <img src={mail} alt="icono de mail" className="w-[25px]"/>
            </a> 
          </div>
        </div>

        <div className={`flex text-md font-medium 
        ${isMobile ? "flex-col justify-center items-center" : ""}`}>
          <table>
            <tbody className="flex flex-row mr-5">
              <tr className="flex flex-col items-end underline">
                <td>Nombre: </td>
                <td>Edad: </td>
                <td>Sexo: </td>
                <td>Tamaño: </td>
                <td>Tipo: </td>
                <td>Estado: </td>
                <td>Ubicación: </td>
                <td>Ingreso: </td>
              </tr>
              <tr className="flex flex-col ml-2">
                <td>{pet.name}</td>
                <td>{pet.age}</td>
                <td>{pet.sex}</td>
                <td>{pet.size}</td>
                <td>{pet.type}</td>
                <td>{pet.state}</td>
                <td>{pet.location}</td>
                <td>{formatDate(pet.createdAt)}</td>
              </tr>
            </tbody>
          </table>
          <img src={pet.main_image} alt={pet.name} 
          className={`p-1 rounded-2xl ${isMobile ? "w-[280px]" : "w-[230px] ml-5"}`}/>
        </div>

        <h2 className="text-3xl font-bold underline mt-3">
          Descripción
        </h2>
        <span className={`flex text-md font-medium justify-center items-center w-full`}>
          <p className={`${isMobile ? "w-[350px]" : ""}`}>
            {pet.description}
          </p>
        </span>

        <h2 className="text-3xl font-bold underline mt-3">
          Galería 
        </h2>
        <Gallery gallery={pet.images} isMobile={isMobile}/>

        {user && user.role === "foundation" &&
        <div className="flex flex-col text-lg font-semibold items-center text-[#86155f] w-[500px]">
          <h2 className="text-3xl font-bold underline mt-3">
            Datos de la fundación
          </h2>
          <table>
            <tbody className="flex flex-row mr-5">
              <tr className="flex flex-col items-end underline">
                <td>Nombre: </td>
                <td>Ubicación: </td>
                {user.alias && <td>Alias: </td>}
                {user.cbuCvu && <td>CBU/CVU: </td>}
                {user.urlDonation && <td>Donación: </td>}
              </tr>
              <tr className="flex flex-col ml-2">
                <td>{user.foundation}</td>
                <td>{user.location}</td>
                {user.alias && <td>{user.alias}</td>}
                {user.cbuCvu && <td>{user.cbuCvu}</td>}
                {user.urlDonation && 
                <td><a href={user.urlDonation} target="_blank" 
                rel="noreferrer">Enlace</a></td>}
              </tr>
            </tbody>
          </table>
        </div>
        }


        <h2 className="text-3xl font-bold underline mt-3">
          Contacto
        </h2>
        <ContactForm userId={pet.userId} namePet={pet.name} petId={pet.id} API_URL={API_URL} statePet={pet.state}/>
      </article>
    );
  }

  return (
    <Layout>
      {pet && !isEditing && !deleteSuccess && renderView()}

      {isEditing && !deleteSuccess && <PetEdition pet={pet} setIsEditing={setIsEditing} API_URL={API_URL} token={userLogged.token} setPet={setPet}/>}

      {deleteSuccess && renderDeleteSuccess()}

      {
        !pet && !deleteSuccess && 
        <h2 className="text-3xl font-bold text-[#86155f]">
          Mascota no encontrada.
        </h2>
      }

      <Helmet>
        <title>{pet ? `Huellitas | ${pet.name}` : "Mascota no encontrada"}</title>
      </Helmet>
    </Layout>
  );
}

export default PetDetail;