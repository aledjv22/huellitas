import { useEffect, useState } from "react";
import { useGetUser } from "../../utils/Users/getUser";

function UserData ({ id, token, API_URL, userLogged, setUserLogged }) {
  const createUserData = () => {
    const values = ["firstName", "lastName", "email", "phone", "role", "foundation", 
    "location", "alias", "cbuCvu", "urlDonation"];

    const datas = ["Nombre", "Apellido", "Email", "Teléfono", "Rol", "Fundación",
    "Ubicación", "Alias", "CBU/CVU", "URL de donación"];

    const data = [];
    for (let i = 0; i < values.length; i++) {
      if(userLogged[values[i]] === "particular") break;

      if(userLogged[values[i]] === "foundation") continue;

      if (userLogged[values[i]] !== null) 
        data.push([datas[i] + ":", userLogged[values[i]]]);
    }

    return data;
  };

  const [userData, setUserData] = useState(createUserData);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 915);

  const getUser = useGetUser(API_URL);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getUser(id);
      if (user) {
        setUserLogged({ user, token });
        setUserData(createUserData());
      }
    };
    
    fetchUserData();
  }, [userLogged, userData]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 915);
  }, [window.innerWidth]); 

  return (
    <div
    className={`flex flex-row ${isMobile ? "w-full left-0 ml-3 text-base" : "text-xl"}`} >
      <ul className="flex flex-col font-medium text-[#520538] mx-2">
        {
        userData.map((data, index) => (
          <li key={index} className="mt-[6px]">
            { data[0] }
          </li>
        ))
        }
      </ul>
      <ul>
        {
        userData.map((data, index) => (
        <li key={index} className="mt-[6px]">
          { data[1] }
        </li>
        ))
        }
      </ul>
    </div>
  );
}

export default UserData;