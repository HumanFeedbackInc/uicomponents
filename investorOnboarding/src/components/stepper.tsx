import React from "react";
import { Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  const progress = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="w-full mb-8">
      <Progress 
        aria-label="Progress" 
        value={progress} 
        className="mb-4"
        color="primary"
      />
      <div className="flex justify-between relative">
        {steps.map((step, index) => (
          <div 
            key={step}
            className="flex flex-col items-center"
          >
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${index <= currentStep 
                  ? "bg-primary text-white" 
                  : "bg-default-200 text-default-500"}
                transition-colors duration-200
              `}
            >
              {index < currentStep ? (
                <Icon icon="lucide:check" className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`
                mt-2 text-small text-center
                ${index <= currentStep 
                  ? "text-primary" 
                  : "text-default-500"}
              `}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
