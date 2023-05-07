import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import MainPage from "../HomePage/MainPage";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import * as React from "react";
import { LocationOn, Payment } from "@mui/icons-material";
import { DoneAll } from "@mui/icons-material";
import { AttachMoney } from "@mui/icons-material";
import Address from "../Address/Address";
import "./Payment2.css";
import Delivery from "./Delivery";
import StripePayment from "./StripePayment";
const steps = ["Delivey Address", "Payment", "Finish Order"];

const Payment2 = () => {
  const [formData, setFormData] = useState({});
  const stepStyle = {
    // maxWidth:"65%",
    // marginTop:"50px",

    /* margin-right: 42px; */
   
    "& .MuiStepLabel-iconContainer": {
      /* padding-right: 8px; */
      padding: "3px",
      border: "1px solid lightgray",
      borderRadius: "50%",
    },

    "& .MuiStepConnector-root": {
      "& .MuiStepConnector-line": {},
    },

    "& .Mui-active": {
      "&.MuiStepLabel-iconContainer": {
        backgroundColor: "#FF4500",
        color: "white",
        fontSize: "2rem",
        outline: "1px solid #FF4500",
        outlineOffset: "2px",
      },
      "& .MuiStepConnector-line": {
        borderColor: "#FF4500",
      },
    },
    "& .Mui-completed": {
      "&.MuiStepLabel-iconContainer": {
        color: "white",
        fontSize: "3rem",
        backgroundColor: "#FF4500",
      },
      "& .MuiStepConnector-line": {
        borderColor: "#FF4500",
      },
    },
    " & .MuiStepLabel-iconContainer": {
      "&.MuiStepLabel-alternativeLabel": {
        paddingRight: "3px",
      },
    },
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box sx={{ width: '100%'}}>
     
        <Stepper activeStep={activeStep} sx={stepStyle} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                {index === 0 ? (
                  <StepLabel {...labelProps} icon={<LocationOn />}>
                    {label}
                  </StepLabel>
                ) : index === 1 ? (
                  <StepLabel {...labelProps} icon={<AttachMoney />}>
                    {label}
                  </StepLabel>
                ) : (
                  <StepLabel {...labelProps} icon={<DoneAll />}>
                    {label}
                  </StepLabel>
                )}
              </Step>
            );
          })}
        </Stepper>
  

      {/* activeStep === steps.length ? (
  <React.Fragment>
    <Typography sx={{ mt: 2, mb: 1 }}>
      
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Box sx={{ flex: '1 1 auto' }} />
      <Button onClick={handleReset}>Reset</Button>
    </Box>
  </React.Fragment>
) : (
  <React.Fragment>
    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      {isStepOptional(activeStep) && (
        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
          Skip
        </Button>
      )}

      <Button onClick={handleNext}>
        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </Box>
  </React.Fragment>
)}
</Box> */}

{activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {
            activeStep === 0 && <Delivery/>
           
          }
          {/* { activeStep === 1 && <StripePayment/>} */}
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', pt: 2,width: "38%",
    marginLeft: "30.2%" }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}


export default Payment2;
