import './profile-img.css';

// "id": "79",
// "name": "blastoise",
// "extId": "9",
// "weight": 855,
// "height": 16,
// "urlBackDefault": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
// "urlFrontDefault": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
// "createdAt": "2025-05-25T21:37:00.949Z",
// "updatedAt": "2025-05-25T21:37:00.949Z",
// "deletedAt": null

export default function ProfileImg(props: { data: unknown }) {
  const { data } = props;
  return (
    <div className="flex flex-col mx-1 my-1 max-sm:mx-5 p-3 sm:items-center sm:gap-2 sm:flex-row rounded-2xl bg-neutral-50">
      <img
        className="mx-auto block rounded-full sm:mx-0 sm:shrink-0"
        src={data.urlFrontDefault}
        alt={'Photo of ' + data.name}
        style={{
          width: 90,
          height: 90,
        }}
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{data.name}</p>
          <p className="font-medium text-gray-500">weight {data.weight}</p>
          <p className="font-medium text-gray-500">height {data.height}</p>
        </div>
      </div>
    </div>
  );
}
