import React from 'react';
import male from '../../Images/male.svg';
import female from '../../Images/female.svg';
import vaccinated from '../../Images/vaccinated.svg';
import unvaccinated from '../../Images/unvaccinated.svg';

function Card({ pet }) {
  return (
    <div
      className='w-64 h-[264px] bg-[#f86ed9] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out mt-2'
    >
      <div className="px-4 py-1 flex justify-center">
        <h2 className="text-2xl font-bold text-[#a11370]">{pet.name}</h2>
      </div>
      <div style={{position: 'relative'}}>
        <img
        src={pet.image}
        alt={pet.name}
        className='w-full h-48 object-cover'/>
        <div className='flex flex-col items-end w-8 mr-1 mt-1 absolute top-0 right-0'>
          <img 
          src={pet.sex.toLowerCase() === 'macho'? male : female} 
          alt='male' 
          className='w-full h-full mb-2 bg-[#fde6f9] p-[1px] rounded-md'/>
          <img 
          src={pet.vaccinated !== 'Desconocido'? vaccinated : unvaccinated} 
          alt='female'
          className='w-full h-full bg-[#fde6f9] p-[1px] rounded-md'/>
        </div>
      </div>
      <p className='bg-[#a11370] px-4 py-1 text-[#fde6f9] flex justify-center'>
        <span className="font-bold">{pet.state}</span>
      </p>
    </div>
  );
}

export default Card;