function Footer () {
  return (
    <footer 
    className={`w-full text-[#86155f] bg-[#fcb6ee] mt-2
    flex flex-col items-center py-2 font-medium`}>
      <p>
        Copyright © 2024. Todos los derechos reservados.
      </p>

      <p> 
        Creado con cariño por  <a href='https://twitter.com/v_alediaz_'
        className='underline underline-offset-2'
        target="_blank"> Alejandro Díaz, </a>
      </p>
      <p>para incentivar la divulgación de la adopción de mascotas.</p>
    </footer>
  );
}

export default Footer;