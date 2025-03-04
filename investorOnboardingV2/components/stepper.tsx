interface StepperProps {
  steps: string[]
  currentStep: number
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep ? "bg-green-500 text-black" : "bg-zinc-700 text-white"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-xs mt-2 text-center max-w-[80px]">{step}</div>
          </div>
        ))}
      </div>

      <div className="relative mt-4">
        <div className="absolute top-0 left-4 right-4 h-1 bg-zinc-700" />
        <div
          className="absolute top-0 left-4 h-1 bg-green-500 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}

