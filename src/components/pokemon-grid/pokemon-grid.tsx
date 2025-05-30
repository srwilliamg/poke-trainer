import './pokemon-grid.css';

import { Button } from '../ui/button';
import { IPokemonData } from '@/interfaces/pokemon.interface';
import ProfileImg from '../profile-img/profile-img';

export default function PokemonGrid(props: {
  nextBehavior: () => () => void;
  previousBehavior: () => () => void;
  pokemons: IPokemonData[];
}) {
  const { nextBehavior, previousBehavior, pokemons } = props;
  const listUsers = pokemons.map((data) => (
    <ProfileImg key={data.id} data={data}></ProfileImg>
  ));

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 mx-2 w-full">
        {listUsers}
      </div>
      <div className="grid grid-cols-6 gap-1 my-5 w-full">
        <Button onClick={previousBehavior()} className="col-start-2">
          Previous
        </Button>
        <Button onClick={nextBehavior()} className="col-start-5">
          Next
        </Button>
      </div>
    </div>
  );
}
