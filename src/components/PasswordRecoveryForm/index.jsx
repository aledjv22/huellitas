import { useState } from "react";
import { useRecoveryPassword } from "../../utils/Users/recoveryPassword";

function PasswordRecoveryForm ({ API_URL, stylesInput, setIsRecorveringPassword, setLoginSuccess }) {
  const stylesButton = `bg-gradient-to-r from-[#e022a7] to-[#a11371] 
  hover:bg-gradient-to-r hover:to-[#e022a7] hover:from-[#a11371] 
  text-[#fccef4] font-bold rounded-lg w-[300px] mb-2 py-2`

  const recoveryPassword = useRecoveryPassword(API_URL);
  
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isShortRequest, setIsShortRequest] = useState(false);

  const recoveryRequest = async (e) => {
    e.preventDefault();
    recoveryPassword(email, setEmail, setIsEmailSent, setIsShortRequest);
  }

  const renderCorrectRequest = () => {
    return (
      <>
        <h3 className="flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]">
          Revise su correo
        </h3>

        <button type="button"
        className={stylesButton}
        onClick={() => {
          setLoginSuccess(false);
          setIsRecorveringPassword(false);
          setIsEmailSent(false);
        }}>
          Ir a loguearse
        </button>
      </>
    );
  }

  const renderRecoveryForm = () => {
    return (
      <form className="flex flex-col w-[300px] font-bold text-[#86155f]"
      onSubmit={recoveryRequest}
      >
        <label htmlFor="email"
        className="w-full flex justify-center mb-2"
        >
          Ingrese su correo:
        </label>

        <input type="email" value={email} required
        className={stylesInput} placeholder="Email"
        autoComplete="email" htmlFor="email" id="email"
        onChange={(e) => {
          setIsShortRequest(false);
          setEmail(e.target.value);
        }} />

        <button type="submit"
        className={stylesButton}
        >
          Recuperar
        </button>

        <div className="flex mb-2 text-sm justify-center hover:text-[#e022a7]">
          <button type="button"
          onClick={() => {
            setIsRecorveringPassword(false);
            setIsShortRequest(false);
          }}> 
            Volver para iniciar sesión 
          </button>
        </div>
      </form>
    );
  }


  return (
    <>
      <div className="flex items-center justify-center relative w-80 my-2 text-2xl font-bold text-[#86155f]">
        <h1>Recuperar contraseña</h1>
      </div>

      {
      isShortRequest?
      <span className="flex flex-col items-center mb-2 text-[#e022a7] font-bold text-base">
        <p>Ya tiene un correo enviado.</p>
        <p>Espere 15 minutos para volver a enviar</p>
      </span>
      :
      undefined
      }

      {
      isEmailSent?
      renderCorrectRequest()
      :
      renderRecoveryForm()
      }
    </>
  );
}

export default PasswordRecoveryForm;