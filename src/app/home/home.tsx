import '../../index.css';
import './home.css';

import { useEffect, useState } from 'react';

import PokemonGrid from '@/components/pokemon-grid/pokemon-grid';
import { useAppTrainerSelector } from '@/store/hooks';

function Home() {
  const [getPokemons, setPokemons] = useState<unknown[]>([]);
  const name = useAppTrainerSelector((state) => {
    return state.trainer.name;
  });

  useEffect(() => {
    try {
      const getPokemonData = async () => {
        const res = await fetch('/api/pokemon?limit=11&offset=0', {
          method: 'GET',
          headers: {
            'x-api-key': 'AnyApiKey',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });

        const jsonRes = await res.json();
        setPokemons(jsonRes);
      };

      getPokemonData();
    } catch (error) {
      console.error('🚀 ~ useEffect ~ error:', error);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 h-screen bg-poke-umbreon w-full">
      <div className="flex flex-row w-full h-2/12 justify-center">
        <div className="flex flex-col w-8/12 h-full pl-6.5 justify-center">
          <h1 className="text-poke-rapidash font-family-pokemon font-stretch-150%">
            Select your favorite pokemons
          </h1>
        </div>
        <div className="flex flex-col w-4/12 h-full items-center justify-center">
          <h1 className="text-poke-rapidash text-shadow-poke-red font-stretch-120%">
            Trainer {name}
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-11/12 self-center">
        <PokemonGrid pokemons={getPokemons}></PokemonGrid>
      </div>
    </div>
  );
}

export default Home;
