import {useState} from 'react';
import { Input, Select, Option, ButtonGroup, Button, Textarea } from "@material-tailwind/react";

const AddGame = ({index}) => {

    console.log(index);

    const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if(number == 1)
        setNumber(1);

    else
        setNumber(number - 1);
  };

  const [compName, setCompName] = useState("");
  const [sport, setSport] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div>
        <div className='min-w-screen  space-y-4 py-5'>
            <h2 className='font-bold text-base'>Enter Game {index}</h2>
            <div className="flex flex-row gap-x-2">
                <Input value={compName} onChange={(e) => setCompName(e.target.value)} label="Enter the name of competition" className='w-1/3' color='orange'/>
                <button className='w-2/3 bg-orngBg text-orngColor text-sm rounded-md hover:bg-orange-50 hover:text-orange-500 transition-all'>REPLICATE PREVIOUS GAME</button>
            </div>
            <div className="w-4/5">
                <Select value={sport} onChange={(e)=> setSport(e.target.value)} label="Enter" color='orange'>
                    <Option>Football</Option>
                    <Option>Cricket</Option>
                    <Option>Volley Ball</Option>
                </Select>
            </div>
                <div className=" min-w-screen flex flex-row items-start content-center  justify-start">
                    <ButtonGroup value={gender} onChange={(e) => setGender(e.target.value)} className="flex row divide-orange-600  bg-orange-400 p-1 rounded-md space-x-2">
                        <Button className='hover:shadow-none rounded-md bg-orange-400 hover:bg-white hover:text-orange-400 focus:bg-white focus:text-orange-400'>Male</Button>
                        <Button className='hover:shadow-none rounded-md bg-orange-400 hover:bg-white hover:text-orange-400 focus:bg-white focus:text-orange-400'>Female</Button>
                        <Button className='hover:shadow-none rounded-md bg-orange-400 hover:bg-white hover:text-orange-400 focus:bg-white focus:text-orange-400'>Mix up</Button>
                    </ButtonGroup>
                </div>
            <div className='flex flex-row'>
                <div className='text-sm w-1/2 flex flex-row text-gray-500 space-x-2 items-center'>
                    <p>Enter maximum number of players in one team</p>
                    
                    <div className=" flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
                        <button
                            onClick={handleDecrement}
                            className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(parseInt(e.target.value))}
                            className="w-6 flex-row mx-2 bg-transparent text-center focus:outline-none"
                        />
                        <button
                            onClick={handleIncrement}
                            className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className='text-sm w-1/4 flex flex-row text-gray-500 space-x-2 items-center'>
                    <p>Minimum number of boys</p>
                    
                    <div className=" flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
                        <input
                            type="number"
                            value={number}
                            min="0"
                            onChange={(e) => setNumber(parseInt(e.target.value))}
                            className="w-6 flex-row text-gray-900 mx-2 bg-transparent text-center focus:outline-none"
                        />
                    </div>
                </div>
                <div className='text-sm w-1/4 flex flex-row text-gray-500 space-x-2 items-center'>
                    <p>Minimum number of girls</p>
                    <div className=" flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
                        <input
                            type="number"
                            value={number}
                            min="0"
                            onChange={(e) => setNumber(parseInt(e.target.value))}
                            className="w-6 text-gray-900 flex-row mx-2 bg-transparent text-center focus:outline-none"
                        />
                    </div>
                </div>
            </div>
            <div className='w-4/5 flex flex-row  items-center justify-center space-x-5'>
                <div className='w-1/3'>
                <Input  label="Participation Fees" color='orange' />
                </div>
                <div className=" w-1/3 p-0">
                    <Select label="Currency (Default Inr)" color='orange' >
                        <Option>Inr</Option>
                        <Option>Dollars</Option>
                        <Option>Dirham</Option>
                    </Select>
                </div>
                <div className='px-2 text-sm w-1/3 flex flex-row flex-grow text-gray-500 space-x-2 items-center justify-around rounded-md'>
                    <p className='w-full border px-2 py-2 rounded-md'>Age restriction</p>
                    
                    <div className=" flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
                        <button
                            onClick={handleDecrement}
                            className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={number}
                            min="1"
                            onChange={()=>{}}
                            className="w-6 text-gray-900 flex-row mx-2 bg-transparent text-center focus:outline-none"
                        />
                        <button
                            onClick={handleIncrement}
                            className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-4/5 flex flex-row space-x-5'>
                <div className='w-1/3'>
                <Input  label="Enter the prize pool for the game" color='orange'/>
                </div>
                <div className=" w-1/3 p-0 my-0">
                    <Select  label="Currency (Default Inr)" color='orange'>
                        <Option>Inr</Option>
                        <Option>Dollars</Option>
                        <Option>Dirham</Option>
                    </Select>
                </div>
            </div>

            <div className='text-sm w-1/2 flex flex-row text-gray-500 space-x-2 items-center '>
                    <p className='w-3/5 px-2 py-2 border rounded-md'>Minimum number of participants in team</p>
                    
                    <div className=" flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
                        <button
                            onClick={handleDecrement}
                            className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(parseInt(e.target.value))}
                            className="w-6 text-gray-900 flex-row mx-2 bg-transparent text-center focus:outline-none"
                        />
                        <button
                            onClick={handleIncrement}
                            className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className='text-sm w-2/4 flex flex-row text-gray-500 space-x-2 items-center'>
                    <p className='w-3/5 px-2 py-2 border rounded-md'>Total number of rounds</p>
                    
                    <div className=" flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
                        <button
                            onClick={handleDecrement}
                            className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(parseInt(e.target.value))}
                            className="w-6 text-gray-900 flex-row mx-2 bg-transparent text-center focus:outline-none"
                        />
                        <button
                            onClick={handleIncrement}
                            className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className='w-3/5'>
                    <Select label="Qualification method for each round" color='orange'>
                        <Option>Qualify the previous round</Option>
                        <Option>Win 2 matches</Option>
                        <Option>Be in the top 4</Option>
                    </Select>
                </div>

                <div className='w-full flex flex-row'>
                    <Textarea className='' color="orange"  placeholder='Any additional information to be shared like Rules, Rounds, etc'/>
                </div>

        </div>
    </div>

  )
}

export default AddGame
