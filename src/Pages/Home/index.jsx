import React from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import { HuellitasContext } from '../../Context';

function Home () {
  const { pets } = React.useContext(HuellitasContext);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-4">
        {pets.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;