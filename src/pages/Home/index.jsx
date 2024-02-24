import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { HuellitasContext } from "../../context";
import { useGetPets } from "../../utils/Pets/getPets";
import addPet from "../../assets/plus.svg"

function Home () {
  const { 
    isLoggedIn,
    filteredPets,
    setPets,
    API_URL
  } = useContext(HuellitasContext);

  const getPets = useGetPets(API_URL);

  useEffect(() => {
    getPets(setPets);
  }, [setPets]);

  const renderView = () => {
    if (filteredPets?.length > 0){
      return (
        filteredPets.map((pet) => (
          <Link to={`pet/${pet.id}`} key={pet.id}>
            <Card key={pet.id} pet={pet} />
          </Link>
        ))
      );
    } else {
      return (
        <div className="mt-2 text-[#86155f] font-bold text-xl">
          No se han encontrado resultados
        </div>
      );
    }
  }

  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-4">
        {renderView()}
        {filteredPets?.length > 0 && (
          <Link to={isLoggedIn ? "pet/register" : "sign-in"}
          style={{backgroundColor: "rgba(252, 206, 244, 0.75)"}}
          className="fixed bottom-[88px] right-10 z-10 p-1 rounded-full"
          >
            <img src={addPet} alt="addPet" className="w-[60px] h-[60px]" />
          </Link>
        )}
      </div>
      <Helmet>
        <title> Huellitas </title>
      </Helmet>
    </Layout>
  );
}

export default Home;