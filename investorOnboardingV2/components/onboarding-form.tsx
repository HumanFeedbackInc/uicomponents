"use client"

import type React from "react"

import { useState } from "react"
import Stepper from "@/components/stepper"
import InvestmentPurpose from "@/components/steps/investment-purpose"
import PreviousInvestments from "@/components/steps/previous-investments"
import FinancialBackground from "@/components/steps/financial-background"
import LegalCompliance from "@/components/steps/legal-compliance"
import PersonalInformation from "@/components/steps/personal-information"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const steps = [
  "Investment Purpose",
  "Previous Investments",
  "Financial Background",
  "Legal & Compliance",
  "Personal Information",
]

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Investment Purpose
    investmentPurpose: "",
    investmentExperience: "",

    // Previous Investments
    previousInvestments: [] as string[],
    investmentObjective: "",
    riskTolerance: "",

    // Financial Background
    netWorth: "",
    financialAssets: "",
    householdIncome: "",

    // Legal & Compliance
    legalAcknowledgment: false,
    insiderStatus: false,

    // Personal Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    sin: "",
    email: "",
    street: "",
    unit: "",
    postalCode: "",
    country: "Canada",
    province: "",
    city: "",
    employmentStatus: "",
    occupation: "",
  })

  const [formComplete, setFormComplete] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const validateCurrentStep = () => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 0) {
      if (!formData.investmentPurpose) newErrors.investmentPurpose = "Please select an investment purpose"
      if (!formData.investmentExperience) newErrors.investmentExperience = "Please select your experience level"
    } else if (currentStep === 1) {
      if (formData.previousInvestments.length === 0)
        newErrors.previousInvestments = "Please select at least one previous investment"
      if (!formData.investmentObjective) newErrors.investmentObjective = "Please select an investment objective"
      if (!formData.riskTolerance) newErrors.riskTolerance = "Please select your risk tolerance"
    } else if (currentStep === 2) {
      if (!formData.netWorth) newErrors.netWorth = "Please select your net worth"
      if (!formData.financialAssets) newErrors.financialAssets = "Please select your financial assets"
      if (!formData.householdIncome) newErrors.householdIncome = "Please select your household income"
    } else if (currentStep === 3) {
      if (!formData.legalAcknowledgment) newErrors.legalAcknowledgment = "Please acknowledge the legal requirements"
      // insiderStatus is a boolean, so it's always valid
    } else if (currentStep === 4) {
      if (!formData.firstName) newErrors.firstName = "First name is required"
      if (!formData.lastName) newErrors.lastName = "Last name is required"
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
      if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required"
      if (!formData.sin) newErrors.sin = "SIN is required"
      if (!formData.email) newErrors.email = "Email is required"
      if (!formData.street) newErrors.street = "Street address is required"
      if (!formData.postalCode) newErrors.postalCode = "Postal code is required"
      if (!formData.country) newErrors.country = "Country is required"
      if (!formData.province) newErrors.province = "Province is required"
      if (!formData.city) newErrors.city = "City is required"
      if (!formData.employmentStatus) newErrors.employmentStatus = "Employment status is required"
      if (!formData.occupation) newErrors.occupation = "Occupation is required"

      // Format validations
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (formData.email && !emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }

      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/
      if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Please enter a valid phone number (XXX-XXX-XXXX)"
      }

      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (formData.dateOfBirth && !dateRegex.test(formData.dateOfBirth)) {
        newErrors.dateOfBirth = "Please enter a valid date (YYYY-MM-DD)"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        // Form is complete
        setFormComplete(true)
        console.log("Form submitted:", formData)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleNext()
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <InvestmentPurpose formData={formData} updateFormData={updateFormData} errors={errors} />
      case 1:
        return <PreviousInvestments formData={formData} updateFormData={updateFormData} errors={errors} />
      case 2:
        return <FinancialBackground formData={formData} updateFormData={updateFormData} errors={errors} />
      case 3:
        return <LegalCompliance formData={formData} updateFormData={updateFormData} errors={errors} />
      case 4:
        return <PersonalInformation formData={formData} updateFormData={updateFormData} errors={errors} />
      default:
        return null
    }
  }

  if (formComplete) {
    return (
      <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg border border-green-500">
        <div className="flex flex-col items-center justify-center space-y-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
          <h2 className="text-2xl font-bold text-white">Application Submitted</h2>
          <p className="text-gray-300 text-center">
            Thank you for completing your investor profile. Our team will review your information and contact you
            shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg border border-green-500">
      <Stepper steps={steps} currentStep={currentStep} />

      <form onSubmit={handleSubmit} className="mt-8">
        {renderStep()}

        <div className="flex justify-between mt-8">
          <Button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500/10"
          >
            Previous
          </Button>

          <Button type="submit" className="bg-green-500 hover:bg-green-600 text-black">
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </div>
  )
}

