import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import Layout from "../../Components/Layout";
import check from '../../Images/checkmark.svg';

function SignUp () {
  const { setUsers } = useContext(HuellitasContext);

  const styles = 'bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://db-huellitas-0308351800f8.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        firstName, 
        lastName, 
        email, 
        password,
        role
         })
    });
    if (response.ok) { 
      const newUser = await response.json();
      setUsers(prevUsers => [...prevUsers, newUser]);
      setRegistrationSuccess(true); 
    } else if (response.status === 409) {
      setIsEmailValid(false);
    }
  }

  const renderForm = () => {
    return (
      <>
        <div className='flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]'>
          <h1>Bienvenido</h1>
        </div>
  
        <form className='flex flex-col w-[300px] font-bold text-[#86155f]'
        onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">
            Nombre:
          </label>
          <input type="text" value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="Ingresa tu nombre" required
          className={styles}
          htmlFor='firstName' id='firstName'
          />
          
          <label htmlFor="lastName">
            Apellido:
          </label>
          <input type="text" value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Ingresa tu apellido" required 
          className={styles}
          htmlFor='lastName' id='lastName'
          />
  
          <label htmlFor="email">
            Correo: {isEmailValid ? '' : 'Correo ya registrado'}
          </label>
          <input type="email" value={email} 
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailValid(true);
          }} 
          placeholder="ejemplo@email.com" required id='email'
          className={styles}
          htmlFor='email' autoComplete='email' 
          />
  
          <label htmlFor="password">
            Contraseña:
          </label>
          <input type="password" value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="******" required id='password'
          className={styles}
          htmlFor='password' autoComplete='current-password'
          />
  
          <label htmlFor='role'>
            Que busca?:
          </label>
          <select htmlFor="role"  id='role' required
          className={styles}
          onChange={(e) => {
            if (e.target.value !== 'null')
              setRole(e.target.value);
          }}
          >
            <option value="null">--Seleccione--</option>
            <option value="transit">Ser tránsito</option>
            <option value="shelter">Adoptar</option>
            <option value="transitAndShelter">Ser tránsito y adoptar</option>
            <option value="giveAdoption">Dar en adopción</option>
          </select>
  
          <button type="submit"
          className='bg-gradient-to-r from-[#e022a7] to-[#a11371] 
          hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
          text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3'
          >
            Crear cuenta
          </button>
        </form>
      </>
    )
  }

  const renderSuccess = () => {
    return (
      <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h2 className='text-3xl font-bold text-[#86155f]'> Registro Exitoso </h2>
        <img src={check} alt="check" className='w-20 h-20 mb-4'/>
        <button
          className='bg-gradient-to-r from-[#e022a7] to-[#a11371] 
          hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
          text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3'
          >
            <Link to='/huellitas/sign-in'>
              Inicia sesión
            </Link>
          </button>
      </div>
    )
  }

  return (
    <Layout>
      {
      registrationSuccess ? 
      renderSuccess() :
      renderForm()
      }
    </Layout>
  );
}

export default SignUp;