import './pokemon-grid.css';

import ProfileImg from '../profile-img/profile-img';

export default function PokemonGrid({ pokemons }: { pokemons: unknown[] }) {
  const listUsers = pokemons.map((data) => (
    <ProfileImg key={data.id} data={data}></ProfileImg>
  ));

  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 mx-2 w-full">
      {listUsers}
    </div>
  );
}
