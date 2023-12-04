import React, {useState} from 'react';
import { usePatchUser } from '../../Utils/Users/patchUser';

function UserEdition ({ users, user, setIsEditing, API_URL, userLogged, setUserLogged }) {
  const styles = 'bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const patchUser = usePatchUser(API_URL);

  const isEmpty = (value) => {
    return value === '';
  }

  const cancelEdit = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setIsEditing(false);
  }

  const saveEdit = async (e) => {
    e.preventDefault();
    await patchUser(
      user.id, 
      userLogged.token, 
      isEmpty(firstName) ? user.firstName : firstName, 
      isEmpty(lastName) ? user.lastName : lastName, 
      isEmpty(email) ? user.email : email, 
      users, 
      userLogged, 
      setUserLogged, 
      setIsEditing
    );
  }

  return (
    <>
      <form onSubmit={saveEdit}
      className='flex flex-col w-[300px] font-bold text-[#86155f] mx-2 mt-2'>
        <label htmlFor='firstName'>
          Nombre:
        </label>
        <input type='text' value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder={user.firstName}
        className={styles}
        htmlFor='firstName' id='firstName'
        autoComplete='given-name'
        />

        <label htmlFor='lastName'>
          Apellido:
        </label>
        <input type='text' value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder={user.lastName}
        className={styles}
        htmlFor='lastName' id='lastName'
        autoComplete='family-name'
        />

        <label htmlFor='email'>
          Correo:
        </label>
        <input type='email' value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={user.email}
        className={styles}
        htmlFor='email' id='email'
        autoComplete='email'
        />

        <div className='flex justify-between'>
          <button type='submit' 
          className='bg-gradient-to-r from-[#e022a7] to-[#a11371] 
          hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
          text-[#fccef4] font-bold rounded-lg px-2'
          >
            Guardar
          </button>

          <button type='button' onClick={(cancelEdit)}
          className='bg-[#86155f] text-white font-bold py-1 px-2 rounded-lg'
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}

export default UserEdition;