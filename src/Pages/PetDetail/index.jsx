import { useContext, useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import { HuellitasContext } from '../../Context';


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
      <>
        <h2 
        className='text-3xl font-bold text-[#a11370] my-1 underline'>
          {pet.name}
        </h2>
        <img src={pet.image} alt='Imagen de la mascota' 
        className='w-[400px] h-[400px]'
        />
        <p className='mt-1 text-[#a11370] font-semibold text-xl w-[500px]'>
          {pet.name} es un {pet.type.toLowerCase()} {pet.sex.toLowerCase()} encantador
          {pet.sex === 'Hembra' && 'a'} de {pet.age !== 'Desconocido' && ` ${pet.age} años`} edad 
          {pet.age === 'Desconocido' && ' desconocida'} que se encuentra 
          actualmente en {pet.location}. Busca un hogar amoroso y está disponible para 
          adopción, hogar de tránsito o ambas opciones. {pet.name} {pet.castrated === 'No' && 'no'} 
          {pet.castrated === 'Desconocido' && 'no se sabe si '} esta 
          castrad{pet.sex === 'Hembra'? 'a':'o'} y vacunad{pet.sex === 'Hembra'? 'a':'o'}, asegurando 
          su bienestar. Esta adorable mascota ha estado en espera desde el {formatDate(pet.createdAt)}, 
          ansios{pet.sex === 'Hembra'? 'a':'o'} por encontrar un lugar donde pueda compartir su 
          amor y alegría. ¡Considera darle a {pet.name} un hogar lleno de cariño y compañía!
        </p>
      </>
    );
  }

  return (
    <Layout>
      {pet?renderView():<p>No se encontró la mascota</p>}
    </Layout>
  );
}

export default PetDetail;