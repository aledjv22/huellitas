import React, { useEffect, useState } from 'react';
import { useGetUser } from '../../Utils/Users/getUser';

function UserData ({ id, token, API_URL, userLogged, setUserLogged }) {
  const [userData, setUserData] = useState([
    ['Nombre:',userLogged.user.firstName],
    ['Apellido:',userLogged.user.lastName],
    ['Email:',userLogged.user.email],
    ['Teléfono:',userLogged.user.phone]
  ]);
  const getUser = useGetUser(API_URL);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser(id, token);
      if (data) {
        setUserLogged({ user: data.user, token });
        setUserData([
          ['Nombre:', data.user.firstName],
          ['Apellido:', data.user.lastName],
          ['Email:', data.user.email],
          ['Teléfono:', data.user.phone],
        ]);
      }
    };

    fetchUserData();
  }, [id, token, getUser, setUserLogged]);

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