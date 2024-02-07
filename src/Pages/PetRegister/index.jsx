import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import { usePostPet } from '../../Utils/Pets/postPet';
import { usePostMainImage } from '../../Utils/Pets/postMainImage';
import { usePostImages } from '../../Utils/Pets/postImages';
import Layout from '../../Components/Layout';
import check from '../../Images/checkmark.svg';

function PetRegister () {
  const {
    userLogged,
    setPets,
    API_URL
  } = useContext(HuellitasContext);

  const stylesInput = 'bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2';
  const stylesButton = `bg-gradient-to-r from-[#e022a7] to-[#a11371] hover:bg-gradient-to-r hover:to-[#e022a7] 
  hover:from-[#a11371]  text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3`;

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [location, setLocation] = useState(userLogged.user.location);
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const postPet = usePostPet(API_URL);
  const postMainImage = usePostMainImage();
  const postImages = usePostImages();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let petData = { 
      name, 
      state, 
      location, 
      sex, 
      age, 
      description, 
      type, 
      size, 
      main_image: mainImage, 
      images,
      userId: userLogged.user.id
    };
    await postPet(petData, userLogged.token, setPets, setRegistrationSuccess, setId);
  }

  const handleMainImageChange = async (event) => {
    event.preventDefault();
    postMainImage(event, setMainImage);
  }

  const handleImagesChange = (event) => {
    event.preventDefault();
    postImages(event, setImages);
  }

  const renderSuccess = () => {
    return (
      <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h2 className='text-3xl font-bold text-[#86155f]'> 
          Registro Exitoso 
        </h2>

        <img src={check} alt="check" className='w-20 h-20 mb-4'/>
        
        <Link to={`/huellitas/pet/${id}`}>
          <button className={stylesButton}>
              Ver publicación
          </button>
        </Link>
      </div>
    );
  }

  const renderForm = () => {
    return (
      <>
        <div className='flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]'>
          <h1>Registro de mascotas</h1>
        </div>
        <form className='flex flex-col w-[300px] font-bold text-[#86155f]'
        onSubmit={handleSubmit}
        >
          <label htmlFor='name' className='flex'>
            Nombre:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <input className={stylesInput} type='text' required id='name'
          onChange={e => setName(e.target.value)} placeholder='Nombre' />

          <label htmlFor='state' className='flex'>
            Estado:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <select className={stylesInput} required id='state'
          onChange={(e) => {
            if (e.target.value !== '') setState(e.target.value)
          }}>
            <option value=''>--Seleccione--</option>
            <option value='En adopción'>En adopción</option>
            <option value='Perdido'>Perdido</option>
          </select>


          <label htmlFor='location' className='flex'>
            Ubicación:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <input className={stylesInput} type='text' value={location} 
          onChange={e => setLocation(e.target.value)} placeholder='Ubicación' id='location' />

          <label htmlFor='sex' className='flex'>
            Sexo:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <select className={stylesInput} required id='sex'
          onChange={(e) => {
            if (e.target.value !== '') setSex(e.target.value)
          }}>
            <option value=''>--Seleccione--</option>
            <option value='Macho'>Macho</option>
            <option value='Hembra'>Hembra</option>
          </select>

          <label htmlFor='age' className='flex'>
            Edad:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <input className={stylesInput} type='text' required id='age' 
          onChange={e => setAge(e.target.value)} placeholder='Edad' />

          <label htmlFor='description' className='flex'>
            Descripción:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <input className={stylesInput} type='text' required 
          onChange={e => setDescription(e.target.value)} placeholder='Descripción' id='description' />

          <label htmlFor='type' className='flex'>
            Tipo:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <select className={stylesInput} required id='type'
          onChange={(e) => {
            if (e.target.value !== '') setType(e.target.value)
          }}>
            <option value=''>--Seleccione--</option>
            <option value='Perro'>Perro</option>
            <option value='Gato'>Gato</option>
          </select>

          <label htmlFor='size' className='flex'>
            Tamaño:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <select className={stylesInput} required id='size'
          onChange={(e) => {
            if (e.target.value !== '') setSize(e.target.value)
          }
          }>
            <option value=''>--Seleccione--</option>
            <option value='Pequeño'>Pequeño</option>
            <option value='Mediano'>Mediano</option>
            <option value='Grande'>Grande</option>
          </select>

          <label htmlFor='mainImage' className='flex'>
            Imagen principal:
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <input type='file' onChange={handleMainImageChange} required 
          className={`${stylesInput} cursor-pointer hover:text-[#e022a7] file:hidden`} id='mainImage' />

          <label htmlFor='images' className='flex'>
            Imágenes (min. 3, max 10):
            <div className='ml-1 text-[#FF0000]'> * </div>
          </label>
          <input type='file' multiple onChange={handleImagesChange} required 
          className={`${stylesInput} cursor-pointer hover:text-[#e022a7] file:hidden`} id='images' />

          <button className={stylesButton}
          type='submit'>
            Registrar mascota
          </button>
        </form>
      </>
    );
  }

  return (
    <Layout>
      {registrationSuccess ? renderSuccess() : renderForm()}
    </Layout>
  )
}

export default PetRegister;