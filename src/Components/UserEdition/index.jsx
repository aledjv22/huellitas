import {useState} from 'react';
import { useProfilePicture } from '../../Utils/Users/profilePicture';
import { usePatchUser } from '../../Utils/Users/patchUser';
import { useChangePasswordLocal } from '../../Utils/Users/changePasswordLocal';

function UserEdition ({ users, user, setIsEditing, API_URL, userLogged, setUserLogged }) {
  const styles = 'bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2';

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPassword] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [phone, setPhone] = useState(null);
  const [foundation, setFoundation] = useState(null);
  const [location, setLocation] = useState(null);
  const [alias, setAlias] = useState(null);
  const [cbuCvu, setCbuCvu] = useState(null);
  const [urlDonation, setUrlDonation] = useState(null);
  const [isChangingPassword, setIsChangingPassword] = useState('hidden');
  const [message, setMessage] = useState(null);
  const [isCurrentPassword, setIsCurrentPassword] = useState(false);
  const [isFoundation, setIsFoundation] = useState(user.role === 'foundation');

  const patchUser = usePatchUser(API_URL);
  const profilePicture = useProfilePicture();
  const changePasswordLocal = useChangePasswordLocal(API_URL);

  const isEmpty = (value) => value === null;

  const cancelEdit = () => {
    setFirstName(null);
    setLastName(null);
    setEmail(null);
    setCurrentPassword(null);
    setNewPassword(null);
    setConfirmNewPassword(null);
    setProfilePictureUrl(null);
    setPhone(null);
    setFoundation(null);
    setLocation(null);
    setAlias(null);
    setCbuCvu(null);
    setUrlDonation(null);
    setMessage(null);
    setIsCurrentPassword(false);
    setIsFoundation(false);
    setIsEditing(false);
  }

  const saveEdit = async (e) => {
    e.preventDefault();

    if(!isEmpty(newPassword) && newPassword !== confirmNewPassword) 
      return setMessage('Las contraseñas no coinciden');

    if(!isEmpty(newPassword) && isEmpty(currentPassword))
      return setMessage('Ingrese su contraseña actual');

    if(!isEmpty(newPassword) && !isEmpty(confirmNewPassword))
      if(!isEmpty(newPassword) && (newPassword.length < 8 || confirmNewPassword.length < 8))
        return setMessage('La contraseña debe tener al menos 8 caracteres');

    if(!isEmpty(newPassword) && newPassword === confirmNewPassword) {
      await changePasswordLocal(user.email, currentPassword, newPassword, setIsCurrentPassword);
      
      if(!isCurrentPassword) return setMessage('Contraseña actual incorrecta');
    }

    const updateUserData = () => ({
      ...(firstName !== null && { firstName }),
      ...(lastName !== null && { lastName }),
      ...(email !== null && { email }),
      ...(profilePictureUrl !== null && { image: profilePictureUrl }),
      ...(phone !== null && { phone }),
      ...(isFoundation && foundation !== null && {foundation}),
      ...(isFoundation && location !== null && {location}),
      ...(isFoundation && alias !== null && {alias}),
      ...(isFoundation && cbuCvu !== null && {cbuCvu}),
      ...(isFoundation && urlDonation !== null && {urlDonation})
    });

    let newUserData = null ;
    newUserData = updateUserData();

    if (newUserData === null) return setMessage('No se han realizado cambios');
    if (newUserData !== null) {
      await patchUser(
        user.id, 
        userLogged.token,
        newUserData,
        users, 
        userLogged, 
        setUserLogged, 
        setIsEditing
      );
    }
  }

  const handleImageUpload = async (event) => {
    event.preventDefault();
    profilePicture(event, setProfilePictureUrl);
  };

  return (
    <>
      <form onSubmit={saveEdit}
      className='flex flex-col w-[300px] font-bold text-[#86155f] mx-2 mt-2'>
        <p className='flex items-center justify-center text-[#e72323] text-lg'>
          {message}
        </p>
        <label htmlFor='firstName'>
          Nombre:
        </label>
        <input type='text'
        onChange={(e) => setFirstName(e.target.value)}
        placeholder={user.firstName}
        className={styles}
        htmlFor='firstName' id='firstName'
        autoComplete='given-name'
        />

        <label htmlFor='lastName'>
          Apellido:
        </label>
        <input type='text'
        onChange={(e) => setLastName(e.target.value)}
        placeholder={user.lastName}
        className={styles}
        htmlFor='lastName' id='lastName'
        autoComplete='family-name'
        />

        <label htmlFor='email'>
          Correo:
        </label>
        <input type='email'
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
        <input type='password'
        className={`${styles} ${isChangingPassword}`}
        htmlFor='currentPassword' id='currentPassword'
        autoComplete='current-password'
        onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <label htmlFor='newPassword'>
          Nueva contraseña:
        </label>
        <input type='password'
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
        <input type='password'
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
        <input type='tel'
        onChange={(e) => setPhone(e.target.value)}
        placeholder={user.phone}
        className={styles} id='phone'
        autoComplete='family-name'
        />


        {isFoundation && (
          <>
            <label htmlFor='foundation'>
              Fundación:
            </label>
            <input type='text'
            onChange={(e) => setFoundation(e.target.value)}
            placeholder={user.foundation}
            className={styles} id='foundation'
            autoComplete='organization'
            />

            <label htmlFor='location'>
              Ubicación:
            </label>
            <input type='text'
            onChange={(e) => setLocation(e.target.value)}
            placeholder={user.location}
            className={styles} id='location'
            autoComplete='organization'
            />

            <label htmlFor='alias'>
              Alias:
            </label>
            <input type='text'
            onChange={(e) => setAlias(e.target.value)}
            placeholder={user.alias}
            className={styles} id='alias'
            autoComplete='organization'
            />

            <label htmlFor='cbuCvu'>
              CBU/CVU:
            </label>
            <input type='text'
            onChange={(e) => setCbuCvu(e.target.value)}
            placeholder={user.cbuCvu}
            className={styles} id='cbuCvu'
            autoComplete='organization'
            />

            <label htmlFor='urlDonation'>
              URL de donación:
            </label>
            <input type='text'
            onChange={(e) => setUrlDonation(e.target.value)}
            placeholder={user.urlDonation}
            className={styles} id='urlDonation'
            autoComplete='organization'
            />
          </>
        )}

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