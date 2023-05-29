import { useState } from 'react';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Input, Select, Option, ButtonGroup, Button, Textarea } from "@material-tailwind/react";

const minDistance = 1;

const AddGame = ({ index }) => {
  const valuetext = (value) => {
    return `${value}°C`;
  };

  const [value2, setValue2] = useState([0, 5]);
  
  const [compName, setCompName] = useState("");
  const [sport, setSport] = useState("Badminton");
  const [gender, setGender] = useState("");
  const [fees, setFees] = useState("");
  const [rounds, setRounds] = useState(1);
  const [qualifyCriteria, setQualifyCriteria] = useState("");
  const [info, setInfo] = useState("");
  const [age, setAge] = useState(0);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number === 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };

  const handleAgeIncrement = () => {
    setAge(age + 1);
  }

  const handleAgeDecrement = () => {
    if(age === 1)
    {
        setAge(age);
    }
    else 
    {
        setAge(age - 1);
    }
  }

  const handleRoundIncrement = () => {
    setRounds(rounds+1);
  }

  const handleRoundDecrement = () => {
    if(rounds === 1) {
        setRounds(1);
    }
    else {
        setRounds(rounds - 1);
    }
  }


  const handleCompNameChange = (e) => {
    setCompName(e.target.value);
  };

  const handleSportChange = (e) => {
    setSport(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  console.log("competition name is : ",compName);
  console.log( "sport is  ", sport);
  console.log("Age restriction is : ",age);
  console.log("gender is : ",gender);
  console.log("Range of participants : ", value2);
  console.log("Rounds is : ", rounds);

  console.log("Qualification criteria is : ", qualifyCriteria);
  console.log("Rules are : ", info);

  return (
    <div>
      <div className='min-w-screen space-y-4 py-5'>
        <div className="w-2/3 gap-x-2">
          <Input
            value={compName}
            onChange={handleCompNameChange}
            label="Enter the name of competition"
            className='min-w-1/3'
            color='orange'
          />
        </div>
        <div className="w-4/5">
          <Select
            value={sport}
            onChange={handleSportChange}
            defaultValue={sport}
            placeholder={sport}
            color='orange'
          >
            <Option>Badminton</Option>
            <Option>Football</Option>
            <Option>Cricket</Option>
            <Option>Volley Ball</Option>
          </Select>
        </div>
        <div className=" min-w-screen flex flex-row items-start content-center  justify-start">
          <ButtonGroup
            value={gender}
            onChange={handleGenderChange}
            className="flex row divide-orange-600  bg-orange-400 p-1 rounded-md space-x-2"
          >
            <Button className='hover:shadow-none rounded-md bg-orange-400 text-white hover:bg-white hover:text-orange-400 focus:bg-white selection:bg-white focus:text-orange-400'>Male</Button>
            <Button className='hover:shadow-none rounded-md bg-orange-400 text-white hover:bg-white hover:text-orange-400 focus:bg-white selection:bg-white focus:text-orange-400'>Female</Button>
            <Button className='hover:shadow-none rounded-md bg-orange-400 text-white hover:bg-white hover:text-orange-400 focus:bg-white selection:bg-white focus:text-orange-400'>Mix up</Button>
          </ButtonGroup>
        </div>

        {/**

        <div className='flex flex-row'>
          <div className='text-sm w-1/4 flex flex-row text-gray-500 space-x-2 items-center'>
            <p>Minimum number of boys</p>
            <div className="flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
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
            <div className="flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
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

         */}


        <div className='w-4/5 flex flex-row items-center justify-center space-x-5'>
          <div className='w-1/2'>
            <Input value={fees} onChange={(e)=> setFees(e.target.value)}  label="Participation Fees" color='orange' />
          </div>


          <div className='px-2 text-sm w-1/2 flex flex-row flex-grow text-gray-500 space-x-2 items-center justify-around rounded-md'>
            <p className='w-full border px-2 py-2 rounded-md'>Age restriction</p>
            <div className=" flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
              <button
                onClick={handleAgeDecrement}
                className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
              >
                -
              </button>
              <input
                type="number"
                value={age}
                min="1"
                onChange={(e) => setAge(e.target.value)}
                className="w-6 text-gray-900 flex-row mx-2 bg-transparent text-center focus:outline-none"
              />
              <button
                onClick={handleAgeIncrement}
                className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>


        </div>
        <div className='w-3/5 flex flex-row space-x-5'>
          <div className='w-1/3'>
            <Input label="Enter the prize pool for the game" color='orange' />
          </div>
        </div>
        <div className='text-sm w-1/2 flex flex-row text-gray-500 space-x-2 items-center '>
          <p className='w-3/5 px-2 py-2 border rounded-md'>Number of participants in a team</p>
          <Box sx={{ width: '50%' }}>
            <Slider
              getAriaLabel={() => "Minimum distance shift"}
              value={value2}
              onChange={handleChange2}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              color='secondary'
              disableSwap
            />
          </Box>
        </div>
        <div className='text-sm w-2/4 flex flex-row text-gray-500 space-x-2 items-center'>
          <p className='w-3/5 px-2 py-2 border rounded-md'>Total number of rounds</p>
          <div className="flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
            <button
              onClick={handleRoundDecrement}
              className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              -
            </button>
            <input
              type="number"
              value={rounds}
              onChange={(e) => setRounds(e.target.value)}
              className="w-6 text-gray-900 flex-row mx-2 bg-transparent text-center focus:outline-none"
            />
            <button
              onClick={handleRoundIncrement}
              className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
        <div className='w-3/5'>
          <Select label="Qualification method for each round" color='orange' value={qualifyCriteria} onChange={(e)=> setQualifyCriteria(e.target.value)}>
            <Option>Qualify the previous round</Option>
            <Option>Win 2 matches</Option>
            <Option>Be in the top 4</Option>
          </Select>
        </div>
        <div className='w-full flex flex-row'>
          <Textarea value={info} onChange={(e) => setInfo(e.target.value)} className='' color="orange" placeholder='Any additional information to be shared like Rules, Rounds, etc' />
        </div>
      </div>
    </div>
  );
};

export default AddGame;