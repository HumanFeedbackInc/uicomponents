import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormField } from "@/components/ui/form-field"

interface PersonalInformationProps {
  formData: any
  updateFormData: (data: any) => void
  errors: Record<string, string>
}

export default function PersonalInformation({ formData, updateFormData, errors }: PersonalInformationProps) {
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ]

  const countries = ["Canada", "United States", "Other"]

  const employmentStatuses = ["Employed", "Self-Employed", "Unemployed", "Retired", "Student"]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-green-500 mb-4">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="First Name" error={errors.firstName}>
            <Input
              value={formData.firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>

          <FormField label="Last Name" error={errors.lastName}>
            <Input
              value={formData.lastName}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>

          <FormField label="Date of Birth (YYYY-MM-DD)" error={errors.dateOfBirth}>
            <Input
              value={formData.dateOfBirth}
              onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
              placeholder="YYYY-MM-DD"
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>

          <FormField label="Phone Number (XXX-XXX-XXXX)" error={errors.phoneNumber}>
            <Input
              value={formData.phoneNumber}
              onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
              placeholder="XXX-XXX-XXXX"
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>

          <FormField label="SIN (Social Insurance Number)" error={errors.sin}>
            <Input
              value={formData.sin}
              onChange={(e) => updateFormData({ sin: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>

          <FormField label="Email" error={errors.email}>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-green-500 mb-4">Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Street Name & Number" error={errors.street}>
            <Input
              value={formData.street}
              onChange={(e) => updateFormData({ street: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>

          <FormField label="Unit #" error={errors.unit}>
            <Input
              value={formData.unit}
              onChange={(e) => updateFormData({ unit: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>

          <FormField label="Postal Code" error={errors.postalCode}>
            <Input
              value={formData.postalCode}
              onChange={(e) => updateFormData({ postalCode: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>

          <FormField label="Country" error={errors.country}>
            <Select value={formData.country} onValueChange={(value) => updateFormData({ country: value })}>
              <SelectTrigger className="bg-zinc-800 border-green-500 text-white">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-green-500 text-white">
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField label="Province" error={errors.province}>
            <Select value={formData.province} onValueChange={(value) => updateFormData({ province: value })}>
              <SelectTrigger className="bg-zinc-800 border-green-500 text-white">
                <SelectValue placeholder="Select province" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-green-500 text-white">
                {provinces.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField label="City" error={errors.city}>
            <Input
              value={formData.city}
              onChange={(e) => updateFormData({ city: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-green-500 mb-4">Employment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Employment Status" error={errors.employmentStatus}>
            <Select
              value={formData.employmentStatus}
              onValueChange={(value) => updateFormData({ employmentStatus: value })}
            >
              <SelectTrigger className="bg-zinc-800 border-green-500 text-white">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-green-500 text-white">
                {employmentStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField label="Occupation" error={errors.occupation}>
            <Input
              value={formData.occupation}
              onChange={(e) => updateFormData({ occupation: e.target.value })}
              className="bg-zinc-800 border-green-500 text-white"
            />
          </FormField>
        </div>
      </div>
    </div>
  )
}

