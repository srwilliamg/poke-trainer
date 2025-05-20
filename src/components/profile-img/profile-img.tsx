import './profile-img.css';

export default function ProfileImg(props: { user: any }) {
  const { user } = props;
  return (
    <div className="flex flex-col mx-1 my-1 max-sm:mx-5 p-3 sm:items-center sm:gap-2 sm:flex-row rounded-2xl bg-neutral-50">
      <img
        className="mx-auto block rounded-full sm:mx-0 sm:shrink-0"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{user.name}</p>
          <p className="font-medium text-gray-500">{user.position}</p>
        </div>
      </div>
    </div>
  );
}
