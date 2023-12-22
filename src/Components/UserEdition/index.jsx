import React, {useState} from 'react';
import { useProfilePicture } from '../../Utils/Users/profilePicture';
import { usePatchUser } from '../../Utils/Users/patchUser';
import { useChangePasswordLocal } from '../../Utils/Users/changePasswordLocal';

function UserEdition ({ users, user, setIsEditing, API_URL, userLogged, setUserLogged }) {
  const styles = 'bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState('hidden');

  const patchUser = usePatchUser(API_URL);
  const profilePicture = useProfilePicture();
  const changePasswordLocal = useChangePasswordLocal(API_URL);

  const isEmpty = (value) => value === '';

  const cancelEdit = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setProfilePictureUrl('');
    setPhone('');
    setIsEditing(false);
  }

  const saveEdit = async (e) => {
    e.preventDefault();

    await changePasswordLocal(user.email ,currentPassword, newPassword);

    await patchUser(
      user.id, 
      userLogged.token, 
      isEmpty(firstName) ? user.firstName : firstName, 
      isEmpty(lastName) ? user.lastName : lastName, 
      isEmpty(email) ? user.email : email, 
      isEmpty(profilePictureUrl) ? user.image : profilePictureUrl,
      isEmpty(phone) ? user.phone : phone,
      users, 
      userLogged, 
      setUserLogged, 
      setIsEditing
    );
  }

  const handleImageUpload = async (event) => {
    event.preventDefault();
    profilePicture(event, setProfilePictureUrl);
  };

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

        <label htmlFor='currentPassword'
        className={isChangingPassword}
        >
          Contraseña actual:
        </label>
        <input type='password' value={currentPassword}
        className={`${styles} ${isChangingPassword}`}
        htmlFor='currentPassword' id='currentPassword'
        autoComplete='current-password'
        onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <label htmlFor='newPassword'>
          Nueva contraseña:
        </label>
        <input type='password' value={newPassword}
        onChange={(e) => {
          setNewPassword(e.target.value);
          isEmpty(e.target.value) ? 
          setIsChangingPassword('hidden') : 
          setIsChangingPassword('');
        }}
        className={styles} 
        htmlFor='newPassword' id='newPassword'
        autoComplete='new-password'
        />

        <label htmlFor='confirmNewPassword' 
        className={isChangingPassword}>
          Confirmar nueva contraseña:
        </label>
        <input type='password' value={confirmNewPassword}
        className={`${styles} ${isChangingPassword}`} 
        htmlFor='confirmNewPassword' id='confirmNewPassword'
        autoComplete='new-password'
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        />

        <label htmlFor='profilePicture'>
          Foto de perfil:
        </label>
        <input type='file' onChange={handleImageUpload}
        id='profilePicture' accept='.jpg, .jpeg'
        className={`${styles} cursor-pointer hover:text-[#e022a7] file:hidden`}/>

        <label htmlFor='lastName'>
          Teléfono:
        </label>
        <input type='text' value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={user.phone}
        className={styles} id='phone'
        autoComplete='family-name'
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