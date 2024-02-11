import { useState, useEffect } from 'react';
import heart from '../../Images/heart.svg';
import house from '../../Images/house.svg';
import located from '../../Images/located.svg';
import not_located from '../../Images/not-located.svg';
import male from '../../Images/male.svg';
import female from '../../Images/female.svg';

function Card({ pet }) {
  const [srcState, setSrcState] = useState(heart);

  useEffect(() => {
    {pet.state === 'En adopción' && setSrcState(heart)}

    {pet.state === 'Perdido' && setSrcState(not_located)}

    {pet.state === 'Adoptado' && setSrcState(house)}

    {pet.state === 'Encontrado' && setSrcState(located)}
  }, [pet.state]);
  

  const iconSex =  () => {
    return (
      <img
      src={pet.sex=== 'Macho'? male : female}
      alt='icono de sexo'
      className='h-10 absolute top-1 right-2 p-1 rounded-xl'
      style={{backgroundColor: 'rgba(252, 182, 238, 0.75)'}}
      />
    );
  }

  const iconState = () => {
    return (
      <img src={srcState} 
      alt='icono del estado' 
      className='h-[15px] mr-1'/>
    );
  }

  return (
    <div
      className={`w-[258px] h-[463px]  bg-[#f86ed9] rounded-lg shadow-lg overflow-hidden transform 
      hover:scale-105 transition-transform duration-300 ease-in-out mt-4`}
    >
      <h2 className='flex justify-center text-2xl font-bold text-[#a11370]'>
        {pet.name}
      </h2>
      
      <div className='relative'>
        <img
        src={pet.main_image}
        alt={`Imagen de ${pet.name}`}
        className='w-full h-[258px] object-cover'/>
        <span className={`flex items-center justify-center px-1 ml-2 mb-1 
        text-[#86155f] font-bold w-[120px] rounded-lg absolute bottom-0 left-0`} 
        style={{backgroundColor: 'rgba(252, 182, 238, 0.75)'}}>
          {iconState()}
          {pet.state}
        </span>
        {iconSex()}
      </div>

      <div className='flex flex-col px-2 font-bold mt-2 text-[#86155f]'>
        {pet.age} - {pet.sex}
        
        <span style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical'}}
        className='hidden text-ellipsis line-clamp-[4] boxw font-semibold'>
          {pet.description}
        </span>
      </div>

      <div className='flex justify-center items-center font-bold h-[45px] text-[#86155f] absolute bottom-0 w-full'
        style={{backgroundColor: 'rgba(161, 19, 112, 0.35)'}}>
          Ver más información
      </div>
    </div>
  );
}

export default Card;