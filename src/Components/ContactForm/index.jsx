import { useState, useEffect } from 'react';
import { useGetUser } from '../../Utils/Users/getUser';

function ContactForm ({ userId, namePet, petId, API_URL }) {
  const stylesInput = 'bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2';
  const stylesButton = `bg-gradient-to-r from-[#e022a7] to-[#a11371] hover:bg-gradient-to-r hover:to-[#e022a7] 
  hover:from-[#a11371]  text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3`;

  const [thereIsAnEmail, setThereIsAnEmail] = useState(false);
  const [thereIsAPhone, setThereIsAPhone] = useState(false);
  const [emailPet, setEmailPet] = useState('');
  const getUser = useGetUser(API_URL);

  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser(userId);
      setEmailPet(user.email);
    }
    getUserData();
  }, [userId, getUser]);

  return (
    <form action={`https://formsubmit.co/${emailPet}`} method='POST'
    className='flex flex-col w-[300px] font-bold text-[#86155f]'>
      <label htmlFor='name'>
        Nombre:
      </label>
      <input type='text' required id='name' placeholder='Tu nombre' 
      name='name' className={stylesInput} />

      <label htmlFor='email'>
        Email:
      </label>
      <input type='email' id='email' placeholder='Tu email'
      name='email' className={stylesInput} onChange={(e) => {
        if (e.target.value !== '') {
          setThereIsAnEmail(true);
          setThereIsAPhone(false);
        }
      }} required={!thereIsAPhone}/>

      <label htmlFor='phone'>
        Teléfono:
      </label>
      <input type='text' id='phone' placeholder='Tu teléfono'
      name='phone' className={stylesInput} onChange={(e) => {
        if (e.target.value !== '') {
          setThereIsAPhone(true);
          setThereIsAnEmail(false);
        }
      }} required={!thereIsAnEmail} />

      <label htmlFor='message'>
        Porque quieres adoptar a {namePet}:
      </label>
      <input type='text' required id='message' placeholder='Tu mensaje'
      name='message' className={stylesInput} />

      <input type='submit' value='Enviar' className={stylesButton} />

      <input type='hidden' name='_next' value={`https://aledjv22.github.io/huellitas/pet/${petId}`} />

      <input type='hidden' name='_captcha' value='false' />
    </form>
  );
}

export default ContactForm;