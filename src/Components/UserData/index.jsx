import React from 'react';
import { HuellitasContext } from '../../Context';

function UserData () {
  const {
    userLogged
  } = React.useContext(HuellitasContext);

  let user = userLogged.user;

  const userData = [];
  userData.push(
    ['Nombre:',user.firstName], 
    ['Apellido:',user.lastName], 
    ['Correo:',user.email], 
    ['Teléfono:',user.phone]
  );

  return (
    <>
      <ul className='flex flex-col font-medium text-base text-[#520538] mx-2'>
        {
        userData.map((data, index) => (
          <li key={index} className='mt-[6px]'>
            { data[0] }
          </li>
        ))
        }
      </ul>
      <ul>
        {
        userData.map((data, index) => (
        <li key={index} className='mt-[6px]'>
          { data[1] }
        </li>
        ))
        }
      </ul>
    </>
  );
}

export default UserData;