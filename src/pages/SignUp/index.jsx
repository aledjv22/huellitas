import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HuellitasContext } from "../../context";
import { useProfilePicture } from "../../utils/Users/profilePicture";
import { usePostUser } from "../../utils/Users/postUser";
import Layout from "../../components/Layout";
import check from "../../assets/checkmark.svg";

function SignUp () {
  const { 
    setUsers, 
    API_URL 
  } = useContext(HuellitasContext);

  const stylesInput = "bg-transparent border-2 border-[#86155f] outline-[#f143c6] rounded-lg w-full px-2 py-1 mb-2";
  const stylesButton = `bg-gradient-to-r from-[#e022a7] to-[#a11371] hover:bg-gradient-to-r hover:to-[#e022a7] 
  hover:from-[#a11371]  text-[#fccef4] font-bold rounded-lg w-[300px] mb-4 py-3`;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [foundation, setFoundation] = useState(null);
  const [location, setLocation] = useState(null);
  const [alias, setAlias] = useState(null);
  const [cbuCvu, setCbuCvu] = useState(null);
  const [urlDonation, setUrlDonation] = useState(null);
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("particular");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [isFoundation, setIsFoundation] = useState(false);

  const profilePicture = useProfilePicture();
  const postUser = usePostUser(API_URL);

  const createUserData = () => ({
    firstName,
    lastName,
    email,
    password,
    role,
    ...(profilePictureUrl !== "" && { image: profilePictureUrl }),
    ...(phone !== null && { phone }),
    ...(role === "foundation" && {
      foundation,
      location,
      ...(alias !== null && { alias }),
      ...(cbuCvu !== null && { cbuCvu }),
      ...(urlDonation !== null && { urlDonation }),
    })
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = createUserData();
    await postUser(userData, setUsers, setRegistrationSuccess, setIsEmailValid);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    profilePicture(event, setProfilePictureUrl);
  };

  const renderForm = () => {
    return (
      <>
        <div className="flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]">
          <h1>Bienvenido</h1>
        </div>
  
        <form className="flex flex-col w-[300px] font-bold text-[#86155f]"
        onSubmit={handleSubmit}
        >
          <label htmlFor="firstName" className="flex"> 
            Nombre: 
            <div className="ml-1 text-[#FF0000]"> * </div>
          </label>
          <input type="text" value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="Ingresa tu nombre" required
          className={stylesInput}
          htmlFor="firstName" id="firstName"
          />
          
          <label htmlFor="lastName" className="flex">
            Apellido: 
            <div className="ml-1 text-[#FF0000]"> * </div>
          </label>
          <input type="text" value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Ingresa tu apellido" required 
          className={stylesInput}
          htmlFor="lastName" id="lastName"
          />
  
          <label htmlFor="email" className="flex">
            Correo: {isEmailValid ? "" : "Correo ya registrado"}
            <div className="ml-1 text-[#FF0000]"> * </div>
          </label>
          <input type="email" value={email} 
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailValid(true);
          }} 
          placeholder="ejemplo@email.com" required id="email"
          className={stylesInput}
          htmlFor="email" autoComplete="email" 
          />
  
          <label htmlFor="password" className="flex">
            Contraseña:
            <div className="ml-1 text-[#FF0000]"> * </div>
          </label>
          <input type="password" value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="******" required id="password"
          className={stylesInput} minLength={8}
          htmlFor="password" autoComplete="current-password"
          />

          <label htmlFor="profilePicture">
            Foto de perfil:
          </label>
          <input type="file" onChange={handleImageUpload} 
          htmlFor="profilePicture" id="profilePicture" accept=".jpg, .jpeg"
          className={`${stylesInput} cursor-pointer hover:text-[#e022a7] file:hidden`}
          />

          <label htmlFor="phone" className="flex">
            Teléfono:
            {isFoundation && <div className="ml-1 text-[#FF0000]"> * </div>}
          </label>
          <input type="tel"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="351xxxxxx7" id="phone"
          className={stylesInput} required={isFoundation}
          htmlFor="phone" autoComplete="tel"
          />

          <label htmlFor="role" className="flex">
            Representa una fundación?:
            <div className="ml-1 text-[#FF0000]"> * </div>
          </label>
          <select htmlFor="role"  id="role" required
          className={stylesInput}
          onChange={(e) => {
            if (e.target.value !== "") {
              setRole(e.target.value);
              setIsFoundation(e.target.value === "foundation");
            }
          }}
          >
            <option value="">--Seleccione--</option>
            <option value="foundation">Si</option>
            <option value="particular">No</option>
          </select>

          {isFoundation && (
            <>
              <label htmlFor="fundationName" className="flex">
                Nombre de la fundación:
                <div className="ml-1 text-[#FF0000]"> * </div>
              </label>
              <input type="text" id="fundationName" required
              onChange={(e) => setFoundation(e.target.value)}
              className={stylesInput}
              htmlFor="fundationName" autoComplete="organization"
              />

              <label htmlFor="fundationLocation" className="flex">
                Ubicación:
                <div className="ml-1 text-[#FF0000]"> * </div>
              </label>
              <input type="text" id="fundationLocation" required
              onChange={(e) => setLocation(e.target.value)}
              className={stylesInput}
              htmlFor="fundationLocation" autoComplete="address"
              />

              <label htmlFor="alias">
                Alias:
              </label>
              <input type="text" id="alias" htmlFor="alias"
              onChange={(e) => setAlias(e.target.value)}
              className={stylesInput}
              />

              <label htmlFor="cbuCvu">
                CBU/CVU:
              </label>
              <input type="text" id="cbuCvu" htmlFor="cbuCvu"
              onChange={(e) => setCbuCvu(e.target.value)}
              className={stylesInput}
              />

              <label htmlFor="urlDonation">
                URL de donación:
              </label>
              <input type="url" id="urlDonation" htmlFor="urlDonation"
              onChange={(e) => setUrlDonation(e.target.value)}
              className={stylesInput}
              />
            </>
          )}

          <button type="submit"
          className={stylesButton}
          >
            Crear cuenta
          </button>
        </form>
      </>
    )
  }

  const renderSuccess = () => {
    return (
      <div className="flex flex-col w-screen h-screen items-center justify-center">
        <h2 className="text-3xl font-bold text-[#86155f]"> Registro Exitoso </h2>
        <img src={check} alt="check" className="w-20 h-20 mb-4"/>
        <Link to="/huellitas/sign-in">
          <button className={stylesButton}>
              Inicia sesión
          </button>
        </Link>
      </div>
    );
  }

  return (
    <Layout>
      {
      registrationSuccess ? 
      renderSuccess() :
      renderForm()
      }
    </Layout>
  );
}

export default SignUp;