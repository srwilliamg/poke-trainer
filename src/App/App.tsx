import './App.css';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// const users = [
//   {
//     id: 1,
//     name: "Hedy Lamarr",
//     position: "Pokemon trainer",
//     imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//     imageSize: 90,
//   },
//   {
//     id: 2,
//     name: "Gary Oak",
//     position: "Pokemon trainer",
//     imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//     imageSize: 90,
//   },
//   {
//     id: 3,
//     name: "Gale",
//     position: "Pokemon trainer",
//     imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//     imageSize: 90,
//   },
//   {
//     id: 4,
//     name: "LaeZe'l",
//     position: "Pokemon trainer",
//     imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//     imageSize: 90,
//   },
// ];

function App() {
  return (
    <>
      <div className="flex flex-col gap-2 h-screen bg-poke-umbreon">
        <div className="flex flex-col w-full h-8/12 items-center justify-around">
          <div className="flex flex-col justify-around">
            <div className='className="flex w-full'>
              <h1 className="text-center text-poke-yellow">
                What's your pokemon trainer name?
              </h1>
            </div>
            <div className='className="flex w-full'><br /></div>
            <div className="flex w-full items-center space-x-2 justify-around">
              <Input className='border-none hover:border-none focus:border-none focus:' type="text" placeholder="Trainer"/>
              <Button className='bg-poke-blue hover:bg-poke-squirrel' type="submit">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
