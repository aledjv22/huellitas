import { useState } from "react";

function Footer () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 915);

  return (
    <footer 
    className={`w-full text-[#86155f] bg-[#fcb6ee] mt-2
    flex flex-col items-center py-1 px-4 
    ${isMobile? "font-medium text-sm" : "font-semibold"}`}>
      <p>
        Copyright © 2024. Todos los derechos reservados.
      </p>

      <p> 
        Creado con cariño por  <a href="https://twitter.com/v_alediaz_"
        className="underline underline-offset-2"
        target="_blank"> Alejandro Díaz</a>
        , para incentivar la divulgación de la adopción de mascotas.
      </p>
    </footer>
  );
}

export default Footer;