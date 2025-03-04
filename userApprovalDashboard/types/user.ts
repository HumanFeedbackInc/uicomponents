export interface User {
  id: string
  name: string
  email: string
  status: "pending" | "approved" | "rejected" | "clarification_requested"
  submittedAt: string
  clarificationMessage?: string
  questionnaire: {
    investmentExperience: string
    riskTolerance: string
    investmentGoals: string
    annualIncome: string
    netWorth: string
    sourceOfFunds: string
    timeHorizon: string
  }
  personalDetails: {
    address: string
    phone: string
    dateOfBirth: string
    occupation: string
    employer: string
    taxResidency: string
    identificationNumber: string
  }
  documents: {
    governmentId: string
    voidCheque: string
  }
}

