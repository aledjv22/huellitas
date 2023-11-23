import React, { useState } from 'react';
import down from '../../Images/down-arrow.svg';
import triangle from '../../Images/nav-triangle.svg';

function Submenu({ type, setSearchByType, setSearchBySex }){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex'
    >
      <p 
      onClick={() => {
        setSearchByType(type);
        setSearchBySex(null);
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
        (<img src={triangle} alt='triangle' 
        className='w-10 m-0 absolute z-10 mt-9'/>)
        }

        {
        isOpen &&
        (<ul className='flex flex-col justify-center items-center bg-[#86155f] text-[#fccef4] h-12 w-20 m-0 absolute z-20 mt-[91px] rounded-lg'
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setSearchByType(type)}
        >
          <li onClick={() => setSearchBySex('Macho')}>
            Macho
          </li>

          <li onClick={() => setSearchBySex('Hembra')}>
            Hembra
          </li>
        </ul>)
        }
      
      </div>
    </div>
  );
}

export default Submenu;