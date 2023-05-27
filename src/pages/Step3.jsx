import { useState } from "react";
import AddGame from './AddGame';
import { Button } from "@material-tailwind/react";

const TournamentTracking = () => {

  const [count, setCount] = useState(1);

  const handleAddOneMore = () => {
    setCount(count + 1);
  };

  const handleRemoveGame = () => {

    if(count == 1) 
    {
      setCount(1);
    }
    else{
      setCount(count - 1);
    }

  }

  return (

    <div className='font-bold text-2xl p-2'>New Tournament
      <div className="mt-5 border-2 px-2">
      <h2 className="font-bold text-3xl" >Select Games</h2>
      <div className="mt-5 "></div>
      
        <div>
        {[...Array(count)].map((_, index) => (
          <AddGame key={index} />
        ))}

        <div className='flex flex-row justify-end space-x-4'>
        
        <Button onClick={()=>handleRemoveGame()} color="orange">Remove Game</Button>
        <Button onClick={()=>handleAddOneMore()} color="orange">Add another game</Button>
      </div> 

        </div>
      
      </div>
    </div>
  )
}

export default TournamentTracking
