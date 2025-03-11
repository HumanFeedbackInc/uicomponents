import { type } from "@heroui/react";

export type InvestmentPurpose = 
  | "diversification"
  | "retirement"
  | "future_savings"
  | "education";

export type InvestmentKnowledge = 
  | "limited"
  | "fair"
  | "good"
  | "excellent"
  | "sophisticated";

export type PreviousInvestments = 
  | "alternative"
  | "bonds"
  | "etfs"
  | "mutual_funds"
  | "real_estate"
  | "stocks"
  | "term_deposits"
  | "crypto"
  | "other";

export type InvestmentObjective = 
  | "preservation"
  | "passive_income"
  | "growth"
  | "speculation";

export type RiskTolerance = 
  | "low"
  | "low_medium"
  | "medium"
  | "medium_high"
  | "high"
  | "extreme";

export type ValueRange = 
  | "less_50k"
  | "50k_100k"
  | "100k_250k"
  | "250k_1m"
  | "1m_5m"
  | "more_5m";

export type IncomeRange = 
  | "less_50k"
  | "50k_100k"
  | "100k_250k"
  | "250k_500k"
  | "500k_1m"
  | "1m_5m"
  | "more_5m";

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  sin: string;
  email: string;
}

export interface Address {
  street: string;
  unit?: string;
  postalCode: string;
  country: string;
  province: string;
  city: string;
}

export interface Employment {
  status: string;
  occupation: string;
}

export interface OnboardingFormData {
  investmentPurpose: InvestmentPurpose;
  knowledgeRating: InvestmentKnowledge;
  previousInvestments: PreviousInvestments[];
  investmentObjective: InvestmentObjective;
  riskTolerance: RiskTolerance;
  netWorth: ValueRange;
  netFinancialAssets: ValueRange;
  annualIncome: IncomeRange;
  legalAcknowledgment: boolean;
  insiderStatus: boolean;
  agreementAccepted: boolean;
  idImage: string;
  voidCheque: string;
  directDeposit: string;
  personalInfo: PersonalInfo;
  address: Address;
  employment: Employment;
}
