import React from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { Stepper } from "./components/stepper";
import { InvestmentProfile } from "./components/investment-profile";
import { FinancialInfo } from "./components/financial-info";
import { PersonalInfoForm } from "./components/personal-info";
import { DocumentUpload } from "./components/document-upload";
import { MortgageAgreement } from "./components/mortgage-agreement";
import type { OnboardingFormData } from "./types/form-types";

const STEPS = [
  "Investment Purpose",
  "Investment Experience",
  "Financial Information",
  "Documents",
  "Personal Information",
  "Agreement",
];

export default function App() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState<OnboardingFormData>({
    investmentPurpose: "diversification",
    knowledgeRating: "limited",
    previousInvestments: [],
    investmentObjective: "preservation",
    riskTolerance: "low",
    netWorth: "less_50k",
    netFinancialAssets: "less_50k",
    annualIncome: "less_50k",
    legalAcknowledgment: false,
    insiderStatus: false,
    agreementAccepted: false,
    idImage: "",
    voidCheque: "",
    directDeposit: "",
    personalInfo: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      phoneNumber: "",
      sin: "",
      email: "",
    },
    address: {
      street: "",
      unit: "",
      postalCode: "",
      country: "Canada",
      province: "Ontario",
      city: "",
    },
    employment: {
      status: "Employed",
      occupation: "",
    },
    trustedContact: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col gap-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Investment Purpose</h2>
              <p className="text-small text-white/60">Tell us about your investment goals</p>
            </div>
            <InvestmentProfile
              purpose={formData.investmentPurpose}
              setPurpose={(value) =>
                setFormData({ ...formData, investmentPurpose: value })
              }
              knowledge={formData.knowledgeRating}
              setKnowledge={(value) =>
                setFormData({ ...formData, knowledgeRating: value })
              }
              previousInvestments={formData.previousInvestments}
              setPreviousInvestments={(value) =>
                setFormData({ ...formData, previousInvestments: value })
              }
              objective={formData.investmentObjective}
              setObjective={(value) =>
                setFormData({ ...formData, investmentObjective: value })
              }
              riskTolerance={formData.riskTolerance}
              setRiskTolerance={(value) =>
                setFormData({ ...formData, riskTolerance: value })
              }
              showPurposeOnly={true}
            />
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Investment Experience</h2>
              <p className="text-small text-white/60">Tell us about your investment experience and risk tolerance</p>
            </div>
            <InvestmentProfile
              purpose={formData.investmentPurpose}
              setPurpose={(value) =>
                setFormData({ ...formData, investmentPurpose: value })
              }
              knowledge={formData.knowledgeRating}
              setKnowledge={(value) =>
                setFormData({ ...formData, knowledgeRating: value })
              }
              previousInvestments={formData.previousInvestments}
              setPreviousInvestments={(value) =>
                setFormData({ ...formData, previousInvestments: value })
              }
              objective={formData.investmentObjective}
              setObjective={(value) =>
                setFormData({ ...formData, investmentObjective: value })
              }
              riskTolerance={formData.riskTolerance}
              setRiskTolerance={(value) =>
                setFormData({ ...formData, riskTolerance: value })
              }
              showExperienceOnly={true}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Financial Information</h2>
              <p className="text-small text-white/60">Tell us about your financial situation</p>
            </div>
            <FinancialInfo
              netWorth={formData.netWorth}
              setNetWorth={(value) =>
                setFormData({ ...formData, netWorth: value })
              }
              netFinancialAssets={formData.netFinancialAssets}
              setNetFinancialAssets={(value) =>
                setFormData({ ...formData, netFinancialAssets: value })
              }
              annualIncome={formData.annualIncome}
              setAnnualIncome={(value) =>
                setFormData({ ...formData, annualIncome: value })
              }
              legalAcknowledgment={formData.legalAcknowledgment}
              setLegalAcknowledgment={(value) =>
                setFormData({ ...formData, legalAcknowledgment: value })
              }
              insiderStatus={formData.insiderStatus}
              setInsiderStatus={(value) =>
                setFormData({ ...formData, insiderStatus: value })
              }
            />
          </div>
        );
      case 3:
        return (
          <DocumentUpload
            idImage={formData.idImage}
            setIdImage={(value) => setFormData({ ...formData, idImage: value })}
            voidCheque={formData.voidCheque}
            setVoidCheque={(value) => setFormData({ ...formData, voidCheque: value })}
            directDeposit={formData.directDeposit}
            setDirectDeposit={(value) => setFormData({ ...formData, directDeposit: value })}
          />
        );
      case 4:
        return (
          <PersonalInfoForm
            personalInfo={formData.personalInfo}
            setPersonalInfo={(value) =>
              setFormData({ ...formData, personalInfo: value })
            }
            address={formData.address}
            setAddress={(value) =>
              setFormData({ ...formData, address: value })
            }
            employment={formData.employment}
            setEmployment={(value) =>
              setFormData({ ...formData, employment: value })
            }
            trustedContact={formData.trustedContact}
            setTrustedContact={(value) =>
              setFormData({ ...formData, trustedContact: value })
            }
          />
        );
      case 5:
        return (
          <MortgageAgreement
            agreementAccepted={formData.agreementAccepted}
            setAgreementAccepted={(value) =>
              setFormData({ ...formData, agreementAccepted: value })
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <Card className="max-w-4xl mx-auto bg-content1">
        <CardHeader>
          <h1 className="text-2xl font-bold text-white">Investor Onboarding</h1>
        </CardHeader>
        <CardBody>
          <Stepper steps={STEPS} currentStep={currentStep} />
          {renderStep()}
          <div className="flex justify-between mt-8">
            <Button
              variant="bordered"
              onPress={handleBack}
              isDisabled={currentStep === 0}
              className="text-white"
            >
              Back
            </Button>
            <Button 
              color="primary" 
              onPress={handleNext}
              isDisabled={currentStep === 5 && !formData.agreementAccepted}
            >
              {currentStep === STEPS.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
