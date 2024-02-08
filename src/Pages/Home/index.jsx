import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import { HuellitasContext } from '../../Context';
import addPet from '../../Images/plus.svg'

function Home () {
  const { 
    isLoggedIn,
    filteredPets,
  } = useContext(HuellitasContext);

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
        <div className='mt-2 text-[#86155f] font-bold text-xl'>
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
          <Link to={isLoggedIn ? 'pet/register' : 'sign-in'}
          style={{backgroundColor: 'rgba(252, 206, 244, 0.75)'}}
          className='fixed bottom-10 right-10 z-10 p-1 rounded-full'
          >
            <img src={addPet} alt='addPet' className='w-20 h-20' />
          </Link>
        )}
      </div>
    </Layout>
  );
}

export default Home;