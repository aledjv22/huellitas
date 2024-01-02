import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import { HuellitasContext } from '../../Context';

function Home () {
  const { 
    filteredPets,
  } = React.useContext(HuellitasContext);

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
        <div>
          No results found
        </div>
      );
    }
  }

  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-4">
        {renderView()}
      </div>
    </Layout>
  );
}

export default Home;