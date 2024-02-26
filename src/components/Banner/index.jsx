function Banner ({ photo }) {
  return (
    <figure className="flex justify-between w-screen h-[180px] bg-[#f143c6]">
      <img 
        src={ photo } 
        alt="Foto de perfil"
        className="h-[180px] w-[180px] rounded-full p-1"
      />
      
      <div></div>
    </figure>
  );
}

export default Banner;