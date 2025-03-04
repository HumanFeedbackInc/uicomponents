import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { FormField } from "@/components/ui/form-field"

interface InvestmentPurposeProps {
  formData: any
  updateFormData: (data: any) => void
  errors: Record<string, string>
}

export default function InvestmentPurpose({ formData, updateFormData, errors }: InvestmentPurposeProps) {
  const investmentPurposes = [
    "Investment Diversification",
    "Retirement",
    "Saving for the future",
    "Saving for a child's education",
  ]

  const experienceLevels = ["Limited", "Fair", "Good", "Excellent", "Sophisticated"]

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-green-500">Investment Purpose & Experience</h2>

      <FormField label="What is the intended use of your investment account?" error={errors.investmentPurpose}>
        <RadioGroup
          value={formData.investmentPurpose}
          onValueChange={(value) => updateFormData({ investmentPurpose: value })}
          className="space-y-3"
        >
          {investmentPurposes.map((purpose) => (
            <div key={purpose} className="flex items-center space-x-2">
              <RadioGroupItem
                value={purpose}
                id={purpose.replace(/\s+/g, "-").toLowerCase()}
                className="border-green-500 text-green-500"
              />
              <Label htmlFor={purpose.replace(/\s+/g, "-").toLowerCase()} className="text-white">
                {purpose}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FormField>

      <FormField
        label="How would you rate your investment knowledge and experience?"
        error={errors.investmentExperience}
      >
        <RadioGroup
          value={formData.investmentExperience}
          onValueChange={(value) => updateFormData({ investmentExperience: value })}
          className="space-y-3"
        >
          {experienceLevels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem
                value={level}
                id={level.replace(/\s+/g, "-").toLowerCase()}
                className="border-green-500 text-green-500"
              />
              <Label htmlFor={level.replace(/\s+/g, "-").toLowerCase()} className="text-white">
                {level}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FormField>
    </div>
  )
}

