import '../../index.css';
import './home.css';

import { useEffect, useState } from 'react';

import PokemonGrid from '@/components/pokemon-grid/pokemon-grid';
import { useAppTrainerSelector } from '@/store/hooks';

const pokemons = [
  {
    id: 1,
    name: 'Hedy Lamarr',
    position: 'Pokemon trainer',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  },
  {
    id: 2,
    name: 'Gary Oak',
    position: 'Pokemon trainer',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  },
  {
    id: 3,
    name: 'Gale',
    position: 'Pokemon trainer',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  },
  {
    id: 4,
    name: "LaeZe'l",
    position: 'Pokemon trainer',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  },
];

function Home() {
  const name = useAppTrainerSelector((state) => {
    return state.trainer.name;
  });

  const [setPokemons, getPokemons] = useState();

  useEffect(() => {
    const getPokemonData = async () => {
      fetch('localhost:3000/pokemon?name=pikachu');
    };

    getPokemonData();
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
        <PokemonGrid pokemons={pokemons}></PokemonGrid>
      </div>
    </div>
  );
}

export default Home;
