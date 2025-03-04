import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { FormField } from "@/components/ui/form-field"

interface FinancialBackgroundProps {
  formData: any
  updateFormData: (data: any) => void
  errors: Record<string, string>
}

export default function FinancialBackground({ formData, updateFormData, errors }: FinancialBackgroundProps) {
  const netWorthOptions = [
    "Less than $50K CDN",
    "$50K CDN - $100K CDN",
    "$100K CDN - $250K CDN",
    "$250K CDN - $1M CDN",
    "$1M CDN - $5M CDN",
    "$5M+ CDN",
  ]

  const financialAssetsOptions = [
    "Less than $50K CDN",
    "$50K CDN - $100K CDN",
    "$100K CDN - $250K CDN",
    "$250K CDN - $1M CDN",
    "$1M CDN - $5M CDN",
    "$5M+ CDN",
  ]

  const householdIncomeOptions = [
    "Less than $50K CDN",
    "$50K CDN - $100K CDN",
    "$100K CDN - $250K CDN",
    "$250K CDN - $500K CDN",
    "$500K CDN - $1M CDN",
    "$1M CDN - $5M CDN",
    "$5M+ CDN",
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-green-500">Financial Background</h2>

      <FormField label="What is the approximate value of your net worth?" error={errors.netWorth}>
        <RadioGroup
          value={formData.netWorth}
          onValueChange={(value) => updateFormData({ netWorth: value })}
          className="space-y-3"
        >
          {netWorthOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option}
                id={`net-worth-${option.replace(/\s+/g, "-").toLowerCase()}`}
                className="border-green-500 text-green-500"
              />
              <Label htmlFor={`net-worth-${option.replace(/\s+/g, "-").toLowerCase()}`} className="text-white">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FormField>

      <FormField label="What is the approximate value of your net financial assets?" error={errors.financialAssets}>
        <RadioGroup
          value={formData.financialAssets}
          onValueChange={(value) => updateFormData({ financialAssets: value })}
          className="space-y-3"
        >
          {financialAssetsOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option}
                id={`financial-assets-${option.replace(/\s+/g, "-").toLowerCase()}`}
                className="border-green-500 text-green-500"
              />
              <Label htmlFor={`financial-assets-${option.replace(/\s+/g, "-").toLowerCase()}`} className="text-white">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FormField>

      <FormField label="What is your annual household income?" error={errors.householdIncome}>
        <RadioGroup
          value={formData.householdIncome}
          onValueChange={(value) => updateFormData({ householdIncome: value })}
          className="space-y-3"
        >
          {householdIncomeOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option}
                id={`household-income-${option.replace(/\s+/g, "-").toLowerCase()}`}
                className="border-green-500 text-green-500"
              />
              <Label htmlFor={`household-income-${option.replace(/\s+/g, "-").toLowerCase()}`} className="text-white">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FormField>
    </div>
  )
}

