import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HuellitasContext } from "../../context";
import Submenu from "../Submenu";
import logo from "../../assets/huellitas-logo.svg";
import down from "../../assets/down-arrow.svg";
import menu_icon from "../../assets/menu.svg";
import close_icon from "../../assets/close.svg";


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
      firstName: "",
      lastName: "",
      id: ""
    }
  }

  const activeStyle = "hover:underline hover:underline-offset-2";

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 915);
  const [isOpenAll, setIsOpenAll] = useState(false);
  const [isOpenDog, setIsOpenDog] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);

  const closeSubmenu = () => {
    setIsOpenAll(false);
    setIsOpenDog(false);
    setIsOpenCat(false);
  }

  useEffect(() => {
    setIsMobile(window.innerWidth < 915);
  } , [window.innerWidth]);

  const navDesktop = () => {
    return (
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full h-12 py-1 px-8 text-xl text-[#86155f] font-semibold bg-[#fcb6ee]">
        <NavLink to="/"
        className={activeStyle}
        >
          <img src={logo} alt="Huellitas" className="h-12" 
          onClick={() => {
            setSearchByType(null);
            setSearchBySex(null);
            setSearchByState(null);
            setSearchBySize(null);
            closeSubmenu();
          }}/>
        </NavLink>
  
        <ul className="flex items-center gap-3">
          <NavLink to="/"
          className={activeStyle}
          >
            <div className={`flex ${!isMobile ? "mr-3" : ""}`}>
              <p className={isMobile ? "mr-3" : ""}
              onClick={() => {
                setSearchByType(null);
                setSearchBySex(null);
                setSearchByState(null);
                setSearchBySize(null);
              }}
              >
                Todos
              </p>

              <div className="ml-[2px] flex flex-col justify-center items-center">
                <img src={down} 
                alt="down arrow" 
                className={isMobile ? "w-5 h-5" : "w-5 h-5 pt-1 ml-1"}
                onClick={() => {
                  setIsOpenAll(!isOpenAll);
                  setIsOpenDog(false);
                  setIsOpenCat(false);
                }}
                />
                {isOpenAll && (
                  <Submenu type="Todo" 
                    setSearchBySex={setSearchBySex} 
                    setSearchByType={setSearchByType} 
                    setSearchByState={setSearchByState} 
                    setSearchBySize={setSearchBySize}
                    closeSubmenu={closeSubmenu}
                  />
                )}
              </div>
            </div>
          </NavLink>
  
          <NavLink to="/"
          className={activeStyle}>
            <div className={`flex ${!isMobile ? "mr-3" : ""}`}>
              <p className={isMobile ? "mr-3" : ""}
              onClick={() => {
                setSearchByType("Perro");
                setSearchBySex(null);
                setSearchByState(null);
                setSearchBySize(null);
              }}
              >
                Perros
              </p>

              <div className="ml-[2px] flex flex-col justify-center items-center">
                <img src={down} 
                alt="down arrow" 
                className={isMobile ? "w-5 h-5" : "w-5 h-5 pt-1 ml-1"}
                onClick={() => {
                  setIsOpenDog(!isOpenDog);
                  setIsOpenAll(false);
                  setIsOpenCat(false);
                }}
                />
                {isOpenDog && (
                  <Submenu type="Perro" 
                    setSearchBySex={setSearchBySex} 
                    setSearchByType={setSearchByType} 
                    setSearchByState={setSearchByState} 
                    setSearchBySize={setSearchBySize}
                    closeSubmenu={closeSubmenu}
                  />
                )}
              </div>
            </div>
          </NavLink>
  
          <NavLink to="/"
          className={activeStyle}>
            <div className={`flex ${!isMobile ? "mr-3" : ""}`}>
              <p className={isMobile ? "mr-3" : ""}
              onClick={() => {
                setSearchByType("Gato");
                setSearchBySex(null);
                setSearchByState(null);
                setSearchBySize(null);
              }}
              >
                Gatos
              </p>

              <div className="ml-[2px] flex flex-col justify-center items-center">
                <img src={down} 
                alt="down arrow" 
                className={isMobile ? "w-5 h-5" : "w-5 h-5 pt-1 ml-1"}
                onClick={() => {
                  setIsOpenCat(!isOpenCat);
                  setIsOpenAll(false);
                  setIsOpenDog(false);
                }}
                />
                {isOpenCat && (
                  <Submenu type="Gato" 
                    setSearchBySex={setSearchBySex} 
                    setSearchByType={setSearchByType} 
                    setSearchByState={setSearchByState} 
                    setSearchBySize={setSearchBySize}
                    closeSubmenu={closeSubmenu}
                  />
                )}
              </div>
            </div>
          </NavLink>
        </ul>
  
        <ul className="flex items-center gap-3 text-[#fcb6ee]">
          <NavLink to="/sign-up"
          className={`${!isLoggedIn ? activeStyle : "hidden"} bg-[#a11370] py-1 px-2 rounded-xl`} 
          onClick={closeSubmenu}
          >
            Registrarse
          </NavLink>
  
          <NavLink to="/sign-in"
          className={`${!isLoggedIn ? activeStyle : "hidden"} bg-[#86155f] py-1 px-2 rounded-xl`} 
          onClick={closeSubmenu}
          >
            Ingresar
          </NavLink>
  
          <NavLink 
          to={`/my-account/${user.firstName}${user.lastName}${user.id.slice(0, 5)}`}
          className={`${isLoggedIn ? activeStyle : "hidden"} bg-[#86155f] py-1 px-2 rounded-xl`}  
          onClick={closeSubmenu}
          >
            Mi Cuenta
          </NavLink>
        </ul>
      </nav>
    );
  }

  // const navMobile = () => {
  //   return (
  //     <nav className="flex justify-between items-center fixed z-10 top-0 w-full h-11 py-1 px-8 text-sm text-[#86155f] bg-[#fcb6ee] border border-[#fcb6ee]">
  //       <NavLink to="/" className={activeStyle} >
  //         <img src={logo} alt="Huellitas" className="h-11" 
  //         onClick={() => {
  //           setSearchByType(null);
  //           setSearchBySex(null);
  //           setSearchByState(null);
  //           setSearchBySize(null);
  //           setIsOpenFilter(false);
  //         }}/>
  //       </NavLink>
  
  //       <img src={isOpen ? close_icon : menu_icon} alt="Menu" className="h-8 cursor-pointer"
  //       onClick={() => setIsOpen(!isOpen)} />

  //       <ul className={`${isOpen ? "flex" : "hidden"} flex-col items-center bg-[#fcb6ee] 
  //       absolute top-11 left-0 w-full font-semibold text-base pb-2`}>
  //         <NavLink to="/"
  //         className={`${activeStyle} flex justify-center w-full py-2 hover:bg-[#fccef4]`}>
  //           <Submenu type="Todo" 
  //             setSearchBySex={setSearchBySex} 
  //             setSearchByType={setSearchByType}
  //             setSearchByState={setSearchByState} 
  //             setSearchBySize={setSearchBySize} 
  //             setIsOpenMobileMenu={setIsOpen}
  //             isOpenFilter={isOpenFilter}
  //             setIsOpenFilter={setIsOpenFilter}
  //           />
  //         </NavLink>

  //         <NavLink to="/"
  //         className={`${activeStyle} flex flex-col items-center w-full py-2 hover:bg-[#fccef4]`} >
  //           <Submenu type="Perro" 
  //             setSearchBySex={setSearchBySex} 
  //             setSearchByType={setSearchByType}
  //             setSearchByState={setSearchByState} 
  //             setSearchBySize={setSearchBySize} 
  //             setIsOpenMobileMenu={setIsOpen}
  //             isOpenFilter={isOpenFilter}
  //             setIsOpenFilter={setIsOpenFilter}
  //           />
  //         </NavLink>

  //         <NavLink to="/"
  //         className={`${activeStyle} flex flex-col items-center w-full py-2 hover:bg-[#fccef4]`} >
  //           <Submenu type="Gato" 
  //             setSearchBySex={setSearchBySex} 
  //             setSearchByType={setSearchByType}
  //             setSearchByState={setSearchByState} 
  //             setSearchBySize={setSearchBySize} 
  //             setIsOpenMobileMenu={setIsOpen}
  //             isOpenFilter={isOpenFilter}
  //             setIsOpenFilter={setIsOpenFilter}
  //           />
  //         </NavLink>

  //         <li className={`${!isLoggedIn ? activeStyle : "hidden"} flex w-full justify-evenly py-1`}>
  //           <NavLink to="/sign-up"
  //           className={`flex flex-col items-center border border-[#86155f] rounded-xl px-3
  //           bg-[#fcb6ee] text-[#86155f] hover:bg-[#86155f] hover:text-[#fcb6ee] py-1 `}
  //           onClick={() => {
  //             setIsOpen(false);
  //             setIsOpenFilter(false);
  //           }}
  //           >
  //             Registrarse
  //           </NavLink>

  //           <NavLink to="/sign-in"
  //           className={`flex flex-col items-center hover:border hover:border-[#86155f] rounded-xl 
  //           hover:bg-[#fcb6ee] hover:text-[#86155f] bg-[#86155f] text-[#fcb6ee] py-1 px-3`}
  //           onClick={() => {
  //             setIsOpen(false);
  //             setIsOpenFilter(false);
  //           }}
  //           >
  //             Ingresar
  //           </NavLink>
  //         </li>

  //         <li 
  //         className={`${isLoggedIn ? activeStyle : "hidden"} flex flex-col items-center py-1`}>
  //           <NavLink
  //           to={`/my-account/${user.firstName}${user.lastName}${user.id.slice(0, 5)}`}
  //           className={`flex flex-col items-center hover:border hover:border-[#86155f] rounded-xl 
  //           hover:bg-[#fcb6ee] hover:text-[#86155f] bg-[#86155f] text-[#fcb6ee] py-1 px-3`}
  //           onClick={() => {
  //             setIsOpen(false);
  //             setIsOpenFilter(false);
  //           }}
  //           >
  //             Mi Cuenta
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </nav>
  //   );
  // }

  return (
    <>
      {!isMobile && navDesktop()}
      {/* {isMobile && navMobile()} */}
    </>
  );
}

export default NavBar;