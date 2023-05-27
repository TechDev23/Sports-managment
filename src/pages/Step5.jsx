import { Textarea } from "@material-tailwind/react";

import { ButtonGroup, Button } from "@material-tailwind/react";

const Step5 = () => {
  return (
    <div className="border-red-500 border-2">
      <h2 className="font-bold text-3xl">Active Tournament</h2>

      <div className="my-10 min-w-screen flex flex-row items-center content-center justify-start">
        <ButtonGroup className="flex row divide-orange-600  bg-orange-400 p-1 rounded-md space-x-2">
          <Button className="hover:shadow-none rounded-md bg-orange-400 hover:bg-white hover:text-orange-400 focus:bg-white active:bg-white focus:text-orange-400">
            Game details
          </Button>
          <Button className="hover:shadow-none rounded-md bg-orange-400 hover:bg-white hover:text-orange-400 focus:bg-white active:bg-white focus:text-orange-400">
            Participants
          </Button>
          <Button className="hover:shadow-none rounded-md bg-orange-400 hover:bg-white hover:text-orange-400 focus:bg-white active:bg-white focus:text-orange-400">
            Set Operations
          </Button>
          <Button className="hover:shadow-none rounded-md bg-orange-400 hover:bg-white hover:text-orange-400 focus:bg-white active:bg-white focus:text-orange-400">
            Rosters
          </Button>
          <Button className="hover:shadow-none rounded-md bg-orange-400 hover:bg-white hover:text-orange-400 focus:bg-white active:bg-white focus:text-orange-400">
            Certifications
          </Button>
        </ButtonGroup>
      </div>
      <div className="min-h-screen min-w-screen">
        <Textarea
          style={{ height: "50vh" }}
          label="Detailed information present here"
          color="orange"
        />
      </div>
    </div>
  );
};

export default Step5;
