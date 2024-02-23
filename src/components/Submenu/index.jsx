import { useState, useEffect } from "react";

function Submenu({ 
  type, 
  setSearchByType, 
  setSearchBySex, 
  setSearchByState, 
  setSearchBySize, 
  setIsOpenMobileMenu,
  isMobile,
  closeSubmenu
}){
  const [sexSelected, setSexSelected] = useState("");
  const [stateSelected, setStateSelected] = useState("");
  const [sizeSelected, setSizeSelected] = useState("");

  const stylesInput = "border-2 border-[#86155f] outline-[#f143c6] rounded-lg text-[#86155f]";

  const isEmpty = (value) => {
    return value === "";
  };

  return (
    <form className={`bg-[#86155f] text-[#fccef4] m-0 absolute z-20 rounded-lg p-2
    ${!isMobile ? "top-[44px]" : ""}
    ${isMobile && type === "Todo" ? "top-[40px]" : ""}
    ${isMobile && type === "Perro" ? "top-[80px]":""}
    ${isMobile && type === "Gato" ? "top-[120px]":""}
    ${isMobile ? "w-full left-0 flex flex-col":""}`}>
      <label htmlFor="sex" className="mr-[23px]">Sexo:</label> 
      <select id="sex" value={sexSelected}
      className={`${stylesInput} ${isMobile ? "h-[30px] mb-2" : ""}`} 
      onChange={(e) => {
        setSexSelected(e.target.value)
      }}>
        <option value="">--</option>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
      </select> 
      {!isMobile && <br/>} 

      <label htmlFor="state" className="mr-[11px]">Estado:</label> 
      <select id="state" value={stateSelected}
      className={`${stylesInput} ${isMobile ? "h-[30px] mb-2" : ""}`} 
      onChange={(e) => {
        setStateSelected(e.target.value)
      }}>
        <option value="">--</option>
        <option value="En adopción">En adopción</option>
        <option value="Perdido">Perdido</option>
        <option value="Adoptado">Adoptado</option>
        <option value="Encontrado">Encontrado</option>
      </select> 
      {!isMobile && <br/>}

      <label htmlFor="size" className="mr-1">Tamaño:</label>
      <select id="size" value={sizeSelected}
      className={`${stylesInput} ${isMobile ? "h-[30px] mb-2" : ""}`} 
      onChange={(e) => {
        setSizeSelected(e.target.value);
      }}>
        <option value="">--</option>
        <option value="Pequeño">Pequeño</option>
        <option value="Mediano">Mediano</option>
        <option value="Grande">Grande</option>
      </select> 
      {!isMobile && <br/>}

      <div className="w-full flex justify-evenly pt-1">
        <button
        className="bg-[#fccef4] text-[#86155f] rounded-lg p-1 cursor-pointer"
        onClick={() => {
          setSearchByType(null);
          setSearchBySex(null);
          setSearchByState(null);
          setSearchBySize(null);
          setSexSelected("");
          setStateSelected("");
          setSizeSelected("");
        }} > Limpiar </button>

        <button 
        className="bg-[#f86ed9] text-[#86155f] rounded-lg p-1 cursor-pointer" 
        onClick={() => {
          !isEmpty(sizeSelected) ? setSearchBySize(sizeSelected) : setSearchBySize(null);
          !isEmpty(stateSelected) ? setSearchByState(stateSelected) : setSearchByState(null);
          !isEmpty(sexSelected) ? setSearchBySex(sexSelected) : setSearchBySex(null);
          type === "Todo" ? setSearchByType(null) : setSearchByType(type);
          if (isMobile) setIsOpenMobileMenu(false);
          closeSubmenu();
        }}> 
          Buscar 
        </button>
      </div>
    </form>
  );
}

export default Submenu;