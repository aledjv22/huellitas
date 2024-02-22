import { useState } from "react";
import { useGetPet } from "../../utils/Pets/getPet";
import { usePostMainImage } from "../../utils/Pets/postMainImage";
import { usePostImages } from "../../utils/Pets/postImages";
import { usePatchPet } from "../../utils/Pets/patchPet";

function PetEdition ({ pet, setPet, setIsEditing, API_URL, token }) {
  const stylesInput = "bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2";
  const stylesButton = `bg-gradient-to-r from-[#e022a7] to-[#a11371] hover:bg-gradient-to-r hover:to-[#e022a7] 
  hover:from-[#a11371]  text-[#fccef4] font-bold rounded-lg  p-3`;
  
  const [name, setName] = useState(pet.name);
  const [state, setState] = useState(pet.state);  
  const [location, setLocation] = useState(pet.location);
  const [sex, setSex] = useState(pet.sex);
  const [age, setAge] = useState(pet.age);
  const [description, setDescription] = useState(pet.description);
  const [type, setType] = useState(pet.type);
  const [size, setSize] = useState(pet.size);
  const [main_image, setMainImage] = useState(pet.main_image);
  const [images, setImages] = useState(pet.images);

  const getPet = useGetPet(API_URL);
  const postMainImage = usePostMainImage();
  const postImages = usePostImages();
  const patchPet = usePatchPet(API_URL);

  const handleMainImageChange = async (e) => {
    e.preventDefault();
    await postMainImage(e, setMainImage);
  }

  const handleImagesChange = async (e) => {
    e.preventDefault();
    await postImages(e, setImages);
  }

  const cancelEdit = () => {
    setName(pet.name);
    setState(pet.state);
    setLocation(pet.location);
    setSex(pet.sex);
    setAge(pet.age);
    setDescription(pet.description);
    setType(pet.type);
    setSize(pet.size);
    setMainImage(pet.main_image);
    setImages(pet.images);
    setIsEditing(false);
  }

  const saveEdit = async (e) => {
    e.preventDefault();

    const petData = {
      name,
      state,
      location,
      sex,
      age,
      description,
      type,
      size,
      main_image,
      images,
    };

    await patchPet(pet.id, token, petData);
    await getPet(pet.id, setPet, setIsEditing);
  }

  return (
    <>
      <div className="flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]">
          <h1>Edición de mascota</h1>
      </div>
      <form onSubmit={saveEdit}
      className="flex flex-col w-[300px] font-bold text-[#86155f]">
        <label htmlFor="name">
          Nombre:
        </label>
        <input type="text" className={stylesInput} id="name"
        onChange={(e) => setName(e.target.value)} placeholder={pet.name} />

        <label htmlFor="main_image">
          Imagen principal:
        </label>
        <input type="file" id="main_image" onChange={handleMainImageChange}
        className={`${stylesInput} cursor-pointer hover:text-[#e022a7] file:hidden`} />

        <label htmlFor="images">
          Imágenes (min. 3, max 10):
        </label>
        <input type="file" id="images" onChange={handleImagesChange} multiple
        className={`${stylesInput} cursor-pointer hover:text-[#e022a7] file:hidden`} />

        <label htmlFor="state">
          Estado:
        </label>
        <select className={stylesInput} id="state"
        onChange={(e) => setState(e.target.value)}>
          <option value="En adopción">En adopción</option>
          <option value="Perdido">Perdido</option>
          <option value="Adoptado">Adoptado</option>
          <option value="Encontrado">Encontrado</option>
        </select>

        <label htmlFor="location">
          Ubicación:
        </label>
        <input type="text" className={stylesInput} id="location"
        onChange={(e) => setLocation(e.target.value)} placeholder={pet.location} />

        <label htmlFor="sex">
          Sexo:
        </label>
        <select className={stylesInput} id="sex" 
        onChange={(e) => setSex(e.target.value)}>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>

        <label htmlFor="age">
          Edad:
        </label>
        <input type="text" className={stylesInput} id="age"
        onChange={(e) => setAge(e.target.value)} placeholder={pet.age} />

        <label htmlFor="type">
          Tipo:
        </label>
        <select className={stylesInput} id="type" 
        onChange={(e) => setType(e.target.value)}>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </select>

        <label htmlFor="size">
          Tamaño:
        </label>
        <select className={stylesInput} id="size" value={pet.size}
        onChange={(e) => setSize(e.target.value)}>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>

        <label htmlFor="description">
          Descripción:
        </label>
        <textarea type="text" className={stylesInput} id="description"
        onChange={(e) => setDescription(e.target.value)} placeholder={pet.description} />

        <div className="flex justify-evenly">
          <button type="submit" className={stylesButton}>
            Guardar
          </button>

          <button type="button" onClick={cancelEdit} className={stylesButton}>
            Cancelar
          </button>
        </div>
      </form>
    </>
  );

}

export default PetEdition;
