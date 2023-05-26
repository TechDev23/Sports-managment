import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { Step1, Step2, Step3, Step4, Step5 } from "../pages";

export default function TournamentTracking() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    return (
      !isLastStep && setActiveStep((cur) => cur + 1)
    )
  };
  const handlePrev = () =>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    return (
      !isLastStep && setActiveStep((cur) => cur - 1)
    )
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
      default:
        return null;
    }
  };


  return (
    <div className="border-2 border-red-500  w-full py-4 px-8 flex flex-col">
      <div className="h-[130px] p-4 border-indigo-500 border-2">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className={`w-[640px] mx-auto`}
        >
          <Step className={`${
      activeStep === 0 ? "bg-orange" : "bg-gray-200"
    } step-item`} onClick={() => setActiveStep(0)}>
            <UserIcon className="h-5 w-5 " />
            <div className="absolute -bottom-16 w-26 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 0 ? "blue" : "gray"}
                className="text-center"
              >
                Organisational Details
              </Typography>
            </div>
          </Step>
          <Step className="" onClick={() => setActiveStep(1)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-10 w-26 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 1 ? "blue" : "gray"}
                className="text-center"
              >
                Invite
              </Typography>
            </div>
          </Step>
          <Step className="" onClick={() => setActiveStep(2)}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-16 w-26 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 2 ? "blue" : "gray"}
                className="text-center"
              >
                Game Details
              </Typography>
            </div>
          </Step>
          <Step className="" onClick={() => setActiveStep(3)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-10 w-26 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 3 ? "blue" : "gray"}
                className="text-center"
              >
                Payment
              </Typography>
            </div>
          </Step>
          <Step className="" onClick={() => setActiveStep(4)}>
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-10 w-28 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 4 ? "blue" : "gray"}
                className="text-center"
              >
                Go Live
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>

      <div className="h-full mt-2 ">{renderStepContent()}</div>

      <div className="bg-green-50 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}
