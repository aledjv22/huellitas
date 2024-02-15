import { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HuellitasContext } from '../../Context';
import Submenu from '../Submenu';
import logo from '../../Images/huellitas-logo.svg';
import menu_icon from '../../Images/menu.svg';
import close_icon from '../../Images/close.svg';


function NavBar () {
  const { 
    isLoggedIn,
    setSearchByType,
    setSearchBySex,
    setSearchByState,
    setSearchBySize,
    userLogged
  } = useContext(HuellitasContext);

  if (userLogged !== null) {
    var user = userLogged.user;
  } else {
    var user = {
      firstName: '',
      lastName: '',
      id: ''
    }
  }

  const activeStyle = 'hover:underline hover:underline-offset-2';

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 915);

  useEffect(() => {
    setIsMobile(window.innerWidth < 915);
  } , [window.innerWidth]);

  const navDesktop = () => {
    return (
      <nav className='flex justify-between items-center fixed z-10 top-0 w-full h-12 py-1 px-8 text-xl text-[#86155f] font-semibold bg-[#fcb6ee]'>
        <NavLink to='/huellitas/'
        className={activeStyle}
        >
          <img src={logo} alt='Huellitas' className='h-12' 
          onClick={() => {
            setSearchByType(null);
            setSearchBySex(null);
            setSearchByState(null);
            setSearchBySize(null);
          }}/>
        </NavLink>
  
        <ul className='flex items-center gap-3'>
          <NavLink to='/huellitas/'
          className={activeStyle}
          >
            <Submenu type='Todo' setSearchBySex={setSearchBySex} setSearchByType={setSearchByType} 
            setSearchByState={setSearchByState} setSearchBySize={setSearchBySize}/> 
          </NavLink>
  
          <NavLink to='/huellitas/'
          className={activeStyle}>
            <Submenu type='Perro' setSearchBySex={setSearchBySex} setSearchByType={setSearchByType} 
            setSearchByState={setSearchByState} setSearchBySize={setSearchBySize}/>
          </NavLink>
  
          <NavLink to='/huellitas/'
          className={activeStyle}>
            <Submenu type='Gato' setSearchBySex={setSearchBySex} setSearchByType={setSearchByType} 
            setSearchByState={setSearchByState} setSearchBySize={setSearchBySize}/>
          </NavLink>
        </ul>
  
        <ul className='flex items-center gap-3 text-[#fcb6ee]'>
          <NavLink to='/huellitas/sign-up'
          className={`${!isLoggedIn ? activeStyle : 'hidden'} bg-[#a11370] py-1 px-2 rounded-xl`} >
            Registrarse
          </NavLink>
  
          <NavLink to='/huellitas/sign-in'
          className={`${!isLoggedIn ? activeStyle : 'hidden'} bg-[#86155f] py-1 px-2 rounded-xl`} >
            Ingresar
          </NavLink>
  
          <NavLink 
          to={`/huellitas/my-account/${user.firstName}${user.lastName}${user.id.slice(0, 5)}`}
          className={`${isLoggedIn ? activeStyle : 'hidden'} bg-[#86155f] py-1 px-2 rounded-xl`}  >
            Mi Cuenta
          </NavLink>
        </ul>
      </nav>
    );
  }

  const navMobile = () => {
    return (
      <nav className='flex justify-between items-center fixed z-10 top-0 w-full h-11 py-1 px-8 text-sm text-[#86155f] bg-[#fcb6ee] border border-[#fcb6ee]'>
        <NavLink to='/huellitas/' className={activeStyle} >
          <img src={logo} alt='Huellitas' className='h-11' 
          onClick={() => {
            setSearchByType(null);
            setSearchBySex(null);
            setSearchByState(null);
            setSearchBySize(null);
          }}/>
        </NavLink>
  
        <img src={isOpen ? close_icon : menu_icon} alt='Menu' className='h-8 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)} />

        <ul className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center bg-[#fcb6ee] 
        absolute top-11 left-0 w-full font-semibold text-base pb-2`}>
          <NavLink to='/huellitas/'
          className={`${activeStyle} flex justify-center w-full py-2 hover:bg-[#fccef4]`}>
            <Submenu type='Todo' setSearchBySex={setSearchBySex} setSearchByType={setSearchByType} 
            setSearchByState={setSearchByState} setSearchBySize={setSearchBySize} 
            setIsOpenMobileMenu={setIsOpen}/>
          </NavLink>

          <NavLink to='/huellitas/'
          className={`${activeStyle} flex flex-col items-center w-full py-2 hover:bg-[#fccef4]`} >
            <Submenu type='Perro' setSearchBySex={setSearchBySex} setSearchByType={setSearchByType}
            setSearchByState={setSearchByState} setSearchBySize={setSearchBySize} 
            setIsOpenMobileMenu={setIsOpen}/>
          </NavLink>

          <NavLink to='/huellitas/'
          className={`${activeStyle} flex flex-col items-center w-full py-2 hover:bg-[#fccef4]`} >
            <Submenu type='Gato' setSearchBySex={setSearchBySex} setSearchByType={setSearchByType}
            setSearchByState={setSearchByState} setSearchBySize={setSearchBySize} 
            setIsOpenMobileMenu={setIsOpen}/>
          </NavLink>

          <li className={`${!isLoggedIn ? activeStyle : 'hidden'} flex w-full justify-evenly py-1`}>
            <NavLink to='/huellitas/sign-up'
            className={`flex flex-col items-center border border-[#86155f] rounded-xl px-3
            bg-[#fcb6ee] text-[#86155f] hover:bg-[#86155f] hover:text-[#fcb6ee] py-1 `}
            onClick={() => setIsOpen(false)}
            >
              Registrarse
            </NavLink>

            <NavLink to='/huellitas/sign-in'
            className={`flex flex-col items-center hover:border hover:border-[#86155f] rounded-xl 
            hover:bg-[#fcb6ee] hover:text-[#86155f] bg-[#86155f] text-[#fcb6ee] py-1 px-3`}
            onClick={() => setIsOpen(false)}
            >
              Ingresar
            </NavLink>
          </li>

          <li 
          className={`${isLoggedIn ? activeStyle : 'hidden'} flex flex-col items-center py-1`}>
            <NavLink
            to={`/huellitas/my-account/${user.firstName}${user.lastName}${user.id.slice(0, 5)}`}
            className={`flex flex-col items-center hover:border hover:border-[#86155f] rounded-xl 
            hover:bg-[#fcb6ee] hover:text-[#86155f] bg-[#86155f] text-[#fcb6ee] py-1 px-3`}
            onClick={() => setIsOpen(false)}
            >
              Mi Cuenta
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <>
      {!isMobile && navDesktop()}
      {isMobile && navMobile()}
    </>
  );
}

export default NavBar;