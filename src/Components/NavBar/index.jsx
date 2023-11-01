import React from "react";
import { NavLink } from "react-router-dom";
import { HuellitasContext } from "../../Context";

function NavBar () {
  const { isLoggedIn } = React.useContext(HuellitasContext);

  const activeStyle = 'hover:underline hoverunderline-offset-4';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full pt-2 px-8 pb-2 text-sm bg-white'>
      <NavLink to='/huellitas/'
      className={activeStyle} >
        Huellitas
      </NavLink>
      <ul className='flex items-center gap-3'>
        <NavLink to='/huellitas/sign-in'
        className={!isLoggedIn ? activeStyle : 'hidden'} >
          Sign In
        </NavLink>

        <NavLink to='/huellitas/sign-up'
        className={!isLoggedIn ? activeStyle : 'hidden'} >
          Sign Up
        </NavLink>

        <NavLink to='/huellitas/my-account'
        className={isLoggedIn ? activeStyle : 'hidden'} >
          My Account
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;