import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { FormField } from "@/components/ui/form-field"

interface PreviousInvestmentsProps {
  formData: any
  updateFormData: (data: any) => void
  errors: Record<string, string>
}

export default function PreviousInvestments({ formData, updateFormData, errors }: PreviousInvestmentsProps) {
  const investmentProducts = [
    "Alternative Investments",
    "Bonds",
    "ETFs",
    "Mutual Funds",
    "Real Estate",
    "Stocks",
    "Term Deposits/GIC's",
    "Cryptocurrencies",
    "Other",
  ]

  const investmentObjectives = ["Capital Preservation", "Passive Income", "Capital Growth", "Speculation"]

  const riskTolerances = ["Low", "Low-Medium", "Medium", "Medium-High", "High", "Extreme"]

  const handleInvestmentProductChange = (product: string, checked: boolean) => {
    const updatedProducts = checked
      ? [...formData.previousInvestments, product]
      : formData.previousInvestments.filter((p: string) => p !== product)

    updateFormData({ previousInvestments: updatedProducts })
  }

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-green-500">Previous Investments & Objectives</h2>

      <FormField label="What other products have you previously invested in?" error={errors.previousInvestments}>
        <div className="space-y-3">
          {investmentProducts.map((product) => (
            <div key={product} className="flex items-center space-x-2">
              <Checkbox
                id={product.replace(/\s+/g, "-").toLowerCase()}
                checked={formData.previousInvestments.includes(product)}
                onCheckedChange={(checked) => handleInvestmentProductChange(product, checked as boolean)}
                className="border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-black"
              />
              <Label htmlFor={product.replace(/\s+/g, "-").toLowerCase()} className="text-white">
                {product}
              </Label>
            </div>
          ))}
        </div>
      </FormField>

      <FormField label="What is your primary investment objective?" error={errors.investmentObjective}>
        <RadioGroup
          value={formData.investmentObjective}
          onValueChange={(value) => updateFormData({ investmentObjective: value })}
          className="space-y-3"
        >
          {investmentObjectives.map((objective) => (
            <div key={objective} className="flex items-center space-x-2">
              <RadioGroupItem
                value={objective}
                id={objective.replace(/\s+/g, "-").toLowerCase()}
                className="border-green-500 text-green-500"
              />
              <Label htmlFor={objective.replace(/\s+/g, "-").toLowerCase()} className="text-white">
                {objective}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FormField>

      <FormField label="How would you describe your overall investment risk tolerance?" error={errors.riskTolerance}>
        <RadioGroup
          value={formData.riskTolerance}
          onValueChange={(value) => updateFormData({ riskTolerance: value })}
          className="space-y-3"
        >
          {riskTolerances.map((tolerance) => (
            <div key={tolerance} className="flex items-center space-x-2">
              <RadioGroupItem
                value={tolerance}
                id={tolerance.replace(/\s+/g, "-").toLowerCase()}
                className="border-green-500 text-green-500"
              />
              <Label htmlFor={tolerance.replace(/\s+/g, "-").toLowerCase()} className="text-white">
                {tolerance}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FormField>
    </div>
  )
}

