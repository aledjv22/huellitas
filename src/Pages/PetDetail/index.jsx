import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetPet } from '../../Utils/Pets/getPet';
import { useDeletePet } from '../../Utils/Pets/deletePet';
import { HuellitasContext } from '../../Context';
import Layout from '../../Components/Layout';
import PetEdition from '../../Components/PetEdition';
import ContactForm from '../../Components/ContactForm';
import Gallery from '../../Components/Gallery';
import check from '../../Images/checkmark.svg';

function PetDetail () {
  const { 
    userLogged,
    isLoggedIn,
    API_URL
  } = useContext(HuellitasContext);

  const getPet = useGetPet(API_URL);
  const deletePet = useDeletePet(API_URL);

  const [pet, setPet] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const pathSegments = window.location.pathname.split('/');
    const petId = pathSegments[pathSegments.length - 1];
    getPet(petId, setPet, setIsEditing);
  }, [setPet]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  const styleButton = `bg-[#86155f] text-[#fccef4] font-bold p-2 m-2 rounded-md transform 
  hover:scale-105 transition-transform duration-300`;

  const renderButtons = () => {
    return (
      <div className='flex flex-row w-full justify-evenly'>
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
      <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h2 className='text-3xl font-bold text-[#86155f]'> 
          Eliminación exitosa 
        </h2>

        <img src={check} alt="check" className='w-20 h-20 mb-4'/>
        
        <Link to='/huellitas'>
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
      <article className='flex flex-col items-center text-[#86155f] w-[500px]'>
        {isLoggedIn &&
        userLogged.user.id === pet.userId &&
        renderButtons()}
        <h2 className='text-3xl font-bold underline'>
          {pet.name}
        </h2>

        <div className='flex text-md font-medium'>
          <table>
            <tbody className='flex flex-row mr-5'>
              <tr className='flex flex-col items-end underline'>
                <td>Nombre: </td>
                <td>Edad: </td>
                <td>Sexo: </td>
                <td>Tamaño: </td>
                <td>Tipo: </td>
                <td>Estado: </td>
                <td>Ubicación: </td>
                <td>Ingreso: </td>
              </tr>
              <tr className='flex flex-col ml-2'>
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
          className='p-1 w-[230px] ml-5 rounded-2xl'/>
        </div>

        <h2 className='text-3xl font-bold underline mt-3'>
          Descripción
        </h2>
        <p className='flex text-md font-medium'>
          {pet.description}
        </p>

        <h2 className='text-3xl font-bold underline mt-3'>
          Galería 
        </h2>
        <Gallery gallery={pet.images}/>
        <ContactForm userId={pet.userId} namePet={pet.name} petId={pet.id} API_URL={API_URL}/>
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
        <h2 className='text-3xl font-bold text-[#86155f]'>
          Mascota no encontrada.
        </h2>
      }
    </Layout>
  );
}

export default PetDetail;