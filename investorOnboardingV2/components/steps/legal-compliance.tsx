import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FormField } from "@/components/ui/form-field"

interface LegalComplianceProps {
  formData: any
  updateFormData: (data: any) => void
  errors: Record<string, string>
}

export default function LegalCompliance({ formData, updateFormData, errors }: LegalComplianceProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-green-500">Legal & Compliance</h2>

      <FormField error={errors.legalAcknowledgment}>
        <div className="flex items-start space-x-3">
          <Checkbox
            id="legal-acknowledgment"
            checked={formData.legalAcknowledgment}
            onCheckedChange={(checked) => updateFormData({ legalAcknowledgment: checked as boolean })}
            className="border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-black mt-1"
          />
          <Label htmlFor="legal-acknowledgment" className="text-white">
            Note: Investments may be sold at any time. Certain security purchases or sales will require a meeting with a
            lawyer for legal requirements. Are you okay with this?
          </Label>
        </div>
      </FormField>

      <FormField
        label="Are you (i) an insider of a reporting issuer, (ii) an insider of any other issuer whose securities are publicly traded, or (iii) a politically exposed person?"
        error={errors.insiderStatus}
      >
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="insider-yes"
              checked={formData.insiderStatus === true}
              onCheckedChange={(checked) => updateFormData({ insiderStatus: checked ? true : false })}
              className="border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-black"
            />
            <Label htmlFor="insider-yes" className="text-white">
              Yes
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="insider-no"
              checked={formData.insiderStatus === false}
              onCheckedChange={(checked) => updateFormData({ insiderStatus: checked ? false : true })}
              className="border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-black"
            />
            <Label htmlFor="insider-no" className="text-white">
              No
            </Label>
          </div>
        </div>
      </FormField>
    </div>
  )
}

