import React from "react";
import { NavLink } from "react-router-dom";
import { HuellitasContext } from "../../Context";
import Submenu from "../Submenu";

function NavBar () {
  const { 
    isLoggedIn,
    setSearchByType,
    setSearchBySex
   } = React.useContext(HuellitasContext);

  const activeStyle = 'hover:underline hover:underline-offset-2';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full h-11 py-1 px-8 text-sm text-[#86155f] bg-[#fcb6ee]'>
      <NavLink to='/huellitas/'
      className={activeStyle}
      onClick={() => {
        setSearchByType(null);
        setSearchBySex(null);
      }}
      >
        Huellitas
      </NavLink>

      <ul className='flex items-center gap-3'>
        <NavLink to='/huellitas/'
        className={activeStyle}
        onClick={() => {
          setSearchByType(null);
          setSearchBySex(null);
        }}
        >
          Todos 
        </NavLink>

        <NavLink to='/huellitas/'
        className={activeStyle}>
          <Submenu type='Perro' setSearchBySex={setSearchBySex} setSearchByType={setSearchByType}/>
        </NavLink>

        <NavLink to='/huellitas/'
        className={activeStyle}>
          <Submenu type='Gato' setSearchBySex={setSearchBySex} setSearchByType={setSearchByType}/>
        </NavLink>

        <NavLink to='/huellitas/'
        onClick={() => setSearchByType('Otro')}
        className={activeStyle}>
          Otros
        </NavLink>
      </ul>

      <ul className='flex items-center gap-3 text-[#fcb6ee]'>
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