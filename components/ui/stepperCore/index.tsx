"use client";
import React, { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation';
import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';

const steps = ['Thanks', 'Action of the day', 'Relax'];

export const StepperCore = () => {
  const asPath = usePathname();
  const [isModuleWorking, setIsModuleWorking] = useState(4)
  const isStepFailed = (step: number) => {
    return step === isModuleWorking;
  };

  useMemo(() => {
    switch (asPath) {
      case '/thank':
        setIsModuleWorking(0)
        return;
      case '/action':
        setIsModuleWorking(1)
        return;
      case '/relax':
        setIsModuleWorking(2)
        return;
      default:
        setIsModuleWorking(4)
        return;
    }
  }, [asPath])
  if (isModuleWorking === 4) {
    return null;
  }
  return (
    <Box sx={{
      position: { xs: 'relative', lg: !isModuleWorking ? 'absolute' : 'relative' },
      top: 100,
      width: !isModuleWorking ? { xs: '95vw', md: '50vw', lg: '55vw' } : { xs: '95vw', md: '70vw' },
      left: !isModuleWorking ? { xs: '2.5vw', md: '33vw', lg: '35vw' } : { xs: '2.5vw', md: '13vw' },
      mb: 1,
    }}>
      <Stepper activeStep={isModuleWorking}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption">
                I`m here
              </Typography>
            );
            labelProps.error = false;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  )
}
