import { NavLink } from "react-router-dom";

function NavBar () {
  const activeStyle = 'hover:underline hoverunderline-offset-4';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full pt-2 px-8 pb-2 text-sm bg-white'>
      <NavLink className={activeStyle} to='/huellitas/'>
        Huellitas
      </NavLink>
      <ul className='flex items-center gap-3'>
        <NavLink className={activeStyle} to='/huellitas/sign-in'>
          Sign In
        </NavLink>

        <NavLink className={activeStyle} to='/huellitas/sign-up'>
          Sign Up
        </NavLink>

        <NavLink className={activeStyle} to='/huellitas/my-account'>
          My Account
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;