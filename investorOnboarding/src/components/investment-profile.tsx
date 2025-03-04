import React from "react";
import { RadioGroup, Radio, CheckboxGroup, Checkbox } from "@heroui/react";
import type { 
  InvestmentPurpose, 
  InvestmentKnowledge,
  PreviousInvestments,
  InvestmentObjective,
  RiskTolerance 
} from "../types/form-types";

interface InvestmentProfileProps {
  purpose: InvestmentPurpose;
  setPurpose: (value: InvestmentPurpose) => void;
  knowledge: InvestmentKnowledge;
  setKnowledge: (value: InvestmentKnowledge) => void;
  previousInvestments: PreviousInvestments[];
  setPreviousInvestments: (value: PreviousInvestments[]) => void;
  objective: InvestmentObjective;
  setObjective: (value: InvestmentObjective) => void;
  riskTolerance: RiskTolerance;
  setRiskTolerance: (value: RiskTolerance) => void;
  showPurposeOnly?: boolean;
  showExperienceOnly?: boolean;
}

export function InvestmentProfile({
  purpose,
  setPurpose,
  knowledge,
  setKnowledge,
  previousInvestments,
  setPreviousInvestments,
  objective,
  setObjective,
  riskTolerance,
  setRiskTolerance,
  showPurposeOnly,
  showExperienceOnly,
}: InvestmentProfileProps) {
  if (showPurposeOnly) {
    return (
      <div className="flex flex-col gap-6">
        <RadioGroup
          label="What is the intended use of your investment account?"
          value={purpose}
          onValueChange={setPurpose as (value: string) => void}
        >
          <Radio value="diversification">Investment Diversification</Radio>
          <Radio value="retirement">Retirement</Radio>
          <Radio value="future_savings">Saving for the future</Radio>
          <Radio value="education">Saving for a child's education</Radio>
        </RadioGroup>

        <RadioGroup
          label="What is your primary investment objective?"
          value={objective}
          onValueChange={setObjective as (value: string) => void}
        >
          <Radio value="preservation">Capital Preservation</Radio>
          <Radio value="passive_income">Passive Income</Radio>
          <Radio value="growth">Capital Growth</Radio>
          <Radio value="speculation">Speculation</Radio>
        </RadioGroup>
      </div>
    );
  }

  if (showExperienceOnly) {
    return (
      <div className="flex flex-col gap-6">
        <RadioGroup
          label="How would you rate your investment knowledge and experience?"
          value={knowledge}
          onValueChange={setKnowledge as (value: string) => void}
        >
          <Radio value="limited">Limited</Radio>
          <Radio value="fair">Fair</Radio>
          <Radio value="good">Good</Radio>
          <Radio value="excellent">Excellent</Radio>
          <Radio value="sophisticated">Sophisticated</Radio>
        </RadioGroup>

        <CheckboxGroup
          label="What other products have you previously invested in?"
          value={previousInvestments}
          onValueChange={setPreviousInvestments as (value: string[]) => void}
        >
          <Checkbox value="alternative">Alternative Investments</Checkbox>
          <Checkbox value="bonds">Bonds</Checkbox>
          <Checkbox value="etfs">ETF's</Checkbox>
          <Checkbox value="mutual_funds">Mutual Funds</Checkbox>
          <Checkbox value="real_estate">Real Estate</Checkbox>
          <Checkbox value="stocks">Stocks</Checkbox>
          <Checkbox value="term_deposits">Term Deposits/GIC's</Checkbox>
          <Checkbox value="crypto">Cryptocurrencies</Checkbox>
          <Checkbox value="other">Other</Checkbox>
        </CheckboxGroup>

        <RadioGroup
          label="How would you describe your overall investment risk tolerance?"
          value={riskTolerance}
          onValueChange={setRiskTolerance as (value: string) => void}
        >
          <Radio value="low">Low</Radio>
          <Radio value="low_medium">Low-Medium</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="medium_high">Medium-High</Radio>
          <Radio value="high">High</Radio>
          <Radio value="extreme">Extreme</Radio>
        </RadioGroup>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup
        label="What is the intended use of your investment account?"
        value={purpose}
        onValueChange={setPurpose as (value: string) => void}
      >
        <Radio value="diversification">Investment Diversification</Radio>
        <Radio value="retirement">Retirement</Radio>
        <Radio value="future_savings">Saving for the future</Radio>
        <Radio value="education">Saving for a child's education</Radio>
      </RadioGroup>

      <RadioGroup
        label="How would you rate your investment knowledge and experience?"
        value={knowledge}
        onValueChange={setKnowledge as (value: string) => void}
      >
        <Radio value="limited">Limited</Radio>
        <Radio value="fair">Fair</Radio>
        <Radio value="good">Good</Radio>
        <Radio value="excellent">Excellent</Radio>
        <Radio value="sophisticated">Sophisticated</Radio>
      </RadioGroup>

      <CheckboxGroup
        label="What other products have you previously invested in?"
        value={previousInvestments}
        onValueChange={setPreviousInvestments as (value: string[]) => void}
      >
        <Checkbox value="alternative">Alternative Investments</Checkbox>
        <Checkbox value="bonds">Bonds</Checkbox>
        <Checkbox value="etfs">ETF's</Checkbox>
        <Checkbox value="mutual_funds">Mutual Funds</Checkbox>
        <Checkbox value="real_estate">Real Estate</Checkbox>
        <Checkbox value="stocks">Stocks</Checkbox>
        <Checkbox value="term_deposits">Term Deposits/GIC's</Checkbox>
        <Checkbox value="crypto">Cryptocurrencies</Checkbox>
        <Checkbox value="other">Other</Checkbox>
      </CheckboxGroup>

      <RadioGroup
        label="What is your primary investment objective?"
        value={objective}
        onValueChange={setObjective as (value: string) => void}
      >
        <Radio value="preservation">Capital Preservation</Radio>
        <Radio value="passive_income">Passive Income</Radio>
        <Radio value="growth">Capital Growth</Radio>
        <Radio value="speculation">Speculation</Radio>
      </RadioGroup>

      <RadioGroup
        label="How would you describe your overall investment risk tolerance?"
        value={riskTolerance}
        onValueChange={setRiskTolerance as (value: string) => void}
      >
        <Radio value="low">Low</Radio>
        <Radio value="low_medium">Low-Medium</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="medium_high">Medium-High</Radio>
        <Radio value="high">High</Radio>
        <Radio value="extreme">Extreme</Radio>
      </RadioGroup>
    </div>
  );
}
