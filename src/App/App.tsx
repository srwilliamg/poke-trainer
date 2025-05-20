import './App.css';

import { ChangeEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { FaArrowRight } from "react-icons/fa6";
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
  const [ inputVal, setInputVal] = useState("")
  
  function nextClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event, inputVal)
  }
  
  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      setInputVal(event.target.value)
    }
  }
  
  return (
    <>
      <div className="flex flex-col gap-2 h-screen bg-amber-50">
        <div className="flex flex-col w-full h-8/12 items-center justify-center">
          <div className="flex flex-col justify-around">
            <div className='className="flex w-full'>
              <h1 className="text-center text-poke-rapidash font-medium font-stretch-95%">
                What's your pokemon trainer name?
              </h1>
            </div>
            <div className="flex w-8/12 items-center space-x-2 self-center my-3">
              <Input onChange={onChangeInput} className='border-l-0 border-r-0 border-t-0 shadow-none outline-none not-focus:animate-bounce not-focus:duration-1000' type="text" />
            </div>
            <div className="flex w-full items-center space-x-2 self-center justify-around">
              <Button className='bg-transparent shadow-none focus:ring-0 text-gray-500 hover:bg-poke-rapidash hover:scale-120 cursor-pointer' type="submit" onClick={nextClick}>Next <FaArrowRight /></Button> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
