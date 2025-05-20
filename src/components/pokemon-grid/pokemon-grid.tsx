import './pokemon-grid.css';

import ProfileImg from '../profile-img/profile-img';

export default function PokemonGrid({ users }: { users: any[] }) {
  const listUsers = users.map((user) => (
    <ProfileImg key={user.id} user={user}></ProfileImg>
  ));

  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 mx-2">
      {listUsers}
    </div>
  );
}
