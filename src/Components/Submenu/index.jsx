import { useState, useEffect } from 'react';
import down from '../../Images/down-arrow.svg';

function Submenu({ type, setSearchByType, setSearchBySex, setSearchByState, setSearchBySize }){
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 915);
  const [sexSelected, setSexSelected] = useState('');
  const [stateSelected, setStateSelected] = useState('');
  const [sizeSelected, setSizeSelected] = useState('');

  const stylesInput = 'border-2 border-[#86155f] outline-[#f143c6] rounded-lg text-[#86155f]';

  const isEmpty = (value) => {
    return value === '';
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 915);
  } , [window.innerWidth]);

  return (
    <div className={`flex ${isMobile && 'flex-col'}`}>
      <p 
      onClick={() => {
        setIsOpen(false);
        type === 'Todo' ? setSearchByType(null) : setSearchByType(type);
        setSearchBySex(null);
        setSearchByState(null);
        setSearchBySize(null);
      }}
      >
        {`${type}s`}
      </p>

      <div className='ml-[2px] flex flex-col justify-center items-center'>
        <img src={down} 
        alt='down arrow' 
        className='w-4 h-4 pt-1'
        onClick={() => setIsOpen(!isOpen)}
        />

        {
        isOpen &&
        (
          <form className=' bg-[#86155f] text-[#fccef4] m-0 absolute z-20 top-[44px] rounded-lg p-2'>
            <label htmlFor='sex' className='mr-[23px]'>Sexo:</label> 
            <select id='sex' className={stylesInput} value={sexSelected}
            onChange={(e) => {
              setSexSelected(e.target.value)
            }}>
              <option value=''>--</option>
              <option value='Macho'>Macho</option>
              <option value='Hembra'>Hembra</option>
            </select> <br/> 

            <label htmlFor='state' className='mr-[11px]'>Estado:</label> 
            <select id='state' className={stylesInput}  value={stateSelected}
            onChange={(e) => {
              setStateSelected(e.target.value)
            }}>
              <option value=''>--</option>
              <option value='En adopción'>En adopción</option>
              <option value='Perdido'>Perdido</option>
              <option value='Adoptado'>Adoptado</option>
              <option value='Encontrado'>Encontrado</option>
            </select> <br/>

            <label htmlFor='size' className='mr-1'>Tamaño:</label>
            <select id='size' className={stylesInput} value={sizeSelected}
            onChange={(e) => {
              setSizeSelected(e.target.value);
            }}>
              <option value=''>--</option>
              <option value='Pequeño'>Pequeño</option>
              <option value='Mediano'>Mediano</option>
              <option value='Grande'>Grande</option>
            </select> <br/>

            <div className='w-full flex justify-evenly pt-1'>
              <button
              className='bg-[#fccef4] text-[#86155f] rounded-lg p-1 cursor-pointer'
              onClick={() => {
                setSearchByType(null);
                setSearchBySex(null);
                setSearchByState(null);
                setSearchBySize(null);
                setSexSelected('');
                setStateSelected('');
                setSizeSelected('');
                setIsOpen(false)
              }}
              > Limpiar </button>

              <button 
              className='bg-[#f86ed9] text-[#86155f] rounded-lg p-1 cursor-pointer' 
              onClick={() => {
                !isEmpty(sizeSelected) ? setSearchBySize(sizeSelected) : setSearchBySize(null);
                !isEmpty(stateSelected) ? setSearchByState(stateSelected) : setSearchByState(null);
                !isEmpty(sexSelected) ? setSearchBySex(sexSelected) : setSearchBySex(null);
                type === 'Todo' ? setSearchByType(null) : setSearchByType(type);
                setIsOpen(false);
              }} > Buscar </button>
            </div>
          </form>
        )
        }
      </div>
    </div>
  );
}

export default Submenu;