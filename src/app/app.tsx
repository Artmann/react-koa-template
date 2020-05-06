import React, { useEffect, useState } from 'react';

import CorgiCard from './components/corgi-card';

interface Corgi {
  id: string;
  image: string;
  text: string;
}

async function fetchCorgis(): Promise<Corgi[]> {
  const response = await fetch('/api/corgis');
  const { corgis } = await response.json();

  return corgis;
}

export default function App() {
  const [ corgis, setCorgis ] = useState<Corgi[]>([]);

  useEffect(() => {
    fetchCorgis().then(fetchedCorgis => {
      setCorgis(fetchedCorgis);
    });
  }, []);

  return (
    <div className="container flex flex-col items-center mx-auto py-8 md:flex-row md:flex-wrap">
      {
        corgis.map(corgi => <CorgiCard image={ corgi.image } text={ corgi.text } key={ corgi.id } />)
      }
    </div>
  );
}
