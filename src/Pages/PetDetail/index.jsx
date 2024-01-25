import { useContext, useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import { HuellitasContext } from '../../Context';
import Gallery from '../../Components/Gallery';


function PetDetail () {
  const { 
    pets,
  } = useContext(HuellitasContext);

  const [pet, setPet] = useState(null);

  useEffect(() => {
    const pathSegments = window.location.pathname.split('/');
    const petId = pathSegments[pathSegments.length - 1];
    const petFound = pets.find(pet => pet.id === petId);
    setPet(petFound);
  }, [pets]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  const renderView = () => {
    return (
      <article className='flex flex-col items-center text-[#86155f] w-[500px]'>
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
                <td>Vistas: </td>
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
                <td>{pet.views}</td>
              </tr>
            </tbody>
          </table>
          <img src={pet.main_image} alt={pet.name} 
          className='p-1 w-[230px] ml-5'/>
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
      </article>
    );
  }

  return (
    <Layout>
      {pet?renderView():<p>No se encontró la mascota</p>}
    </Layout>
  );
}

export default PetDetail;