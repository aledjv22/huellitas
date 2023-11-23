import React from "react";
import { NavLink } from "react-router-dom";
import { HuellitasContext } from "../../Context";

function NavBar () {
  const { 
    isLoggedIn, 
    setSearchByType
   } = React.useContext(HuellitasContext);

  const activeStyle = 'hover:underline hoverunderline-offset-4';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-1 px-8 text-sm bg-[#fcb6ee] text-[#fcb6ee] h-11'>
      <NavLink to='/huellitas/'
      className={`${activeStyle} text-[#86155f]`}  >
        Huellitas
      </NavLink>

      <ul className='flex items-center gap-3'>
        <NavLink to='/huellitas/'
        onClick={() => setSearchByType(null)}
        className={`${activeStyle} text-[#86155f]`}>
          Todos
        </NavLink>

        <NavLink to='/huellitas/'
        onClick={() => setSearchByType('Perro')}
        className={`${activeStyle} text-[#86155f]`}>
          Perros
        </NavLink>

        <NavLink to='/huellitas/'
        onClick={() => setSearchByType('Gato')}
        className={`${activeStyle} text-[#86155f]`}>
          Gatos
        </NavLink>

        <NavLink to='/huellitas/'
        onClick={() => setSearchByType('Otro')}
        className={`${activeStyle} text-[#86155f]`}>
          Otros
        </NavLink>
      </ul>

      <ul className='flex items-center gap-3'>
        <NavLink to='/huellitas/sign-up'
        className={`${!isLoggedIn ? activeStyle : 'hidden'} bg-[#a11370] p-1 rounded-xl`} >
          Sign Up
        </NavLink>

        <NavLink to='/huellitas/sign-in'
        className={`${!isLoggedIn ? activeStyle : 'hidden'} bg-[#86155f] p-1 rounded-xl`} >
          Sign In
        </NavLink>

        <NavLink to='/huellitas/my-account'
        className={`${isLoggedIn ? activeStyle : 'hidden'} bg-[#86155f] p-1 rounded-xl`}  >
          My Account
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;