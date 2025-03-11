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

const radioGroupClasses = {
  base: "gap-3",
  label: "text-white font-medium",
  wrapper: "gap-2",
};

const radioClasses = {
  base: "data-[selected=true]:border-primary",
  label: "text-white",
};

const checkboxGroupClasses = {
  base: "gap-3",
  label: "text-white font-medium",
  wrapper: "gap-2",
};

const checkboxClasses = {
  base: "data-[selected=true]:border-primary",
  label: "text-white",
};

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
          classNames={radioGroupClasses}
        >
          <Radio classNames={radioClasses} value="diversification">Investment Diversification</Radio>
          <Radio classNames={radioClasses} value="retirement">Retirement</Radio>
          <Radio classNames={radioClasses} value="future_savings">Saving for the future</Radio>
          <Radio classNames={radioClasses} value="education">Saving for a child's education</Radio>
        </RadioGroup>

        <RadioGroup
          label="What is your primary investment objective?"
          value={objective}
          onValueChange={setObjective as (value: string) => void}
          classNames={radioGroupClasses}
        >
          <Radio classNames={radioClasses} value="preservation">Capital Preservation</Radio>
          <Radio classNames={radioClasses} value="passive_income">Passive Income</Radio>
          <Radio classNames={radioClasses} value="growth">Capital Growth</Radio>
          <Radio classNames={radioClasses} value="speculation">Speculation</Radio>
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
          classNames={radioGroupClasses}
        >
          <Radio classNames={radioClasses} value="limited">Limited</Radio>
          <Radio classNames={radioClasses} value="fair">Fair</Radio>
          <Radio classNames={radioClasses} value="good">Good</Radio>
          <Radio classNames={radioClasses} value="excellent">Excellent</Radio>
          <Radio classNames={radioClasses} value="sophisticated">Sophisticated</Radio>
        </RadioGroup>

        <CheckboxGroup
          label="What other products have you previously invested in?"
          value={previousInvestments}
          onValueChange={setPreviousInvestments as (value: string[]) => void}
          classNames={checkboxGroupClasses}
        >
          <Checkbox classNames={checkboxClasses} value="alternative">Alternative Investments</Checkbox>
          <Checkbox classNames={checkboxClasses} value="bonds">Bonds</Checkbox>
          <Checkbox classNames={checkboxClasses} value="etfs">ETF's</Checkbox>
          <Checkbox classNames={checkboxClasses} value="mutual_funds">Mutual Funds</Checkbox>
          <Checkbox classNames={checkboxClasses} value="real_estate">Real Estate</Checkbox>
          <Checkbox classNames={checkboxClasses} value="stocks">Stocks</Checkbox>
          <Checkbox classNames={checkboxClasses} value="term_deposits">Term Deposits/GIC's</Checkbox>
          <Checkbox classNames={checkboxClasses} value="crypto">Cryptocurrencies</Checkbox>
          <Checkbox classNames={checkboxClasses} value="other">Other</Checkbox>
        </CheckboxGroup>

        <RadioGroup
          label="How would you describe your overall investment risk tolerance?"
          value={riskTolerance}
          onValueChange={setRiskTolerance as (value: string) => void}
          classNames={radioGroupClasses}
        >
          <Radio classNames={radioClasses} value="low">Low</Radio>
          <Radio classNames={radioClasses} value="low_medium">Low-Medium</Radio>
          <Radio classNames={radioClasses} value="medium">Medium</Radio>
          <Radio classNames={radioClasses} value="medium_high">Medium-High</Radio>
          <Radio classNames={radioClasses} value="high">High</Radio>
          <Radio classNames={radioClasses} value="extreme">Extreme</Radio>
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
        classNames={radioGroupClasses}
      >
        <Radio classNames={radioClasses} value="diversification">Investment Diversification</Radio>
        <Radio classNames={radioClasses} value="retirement">Retirement</Radio>
        <Radio classNames={radioClasses} value="future_savings">Saving for the future</Radio>
        <Radio classNames={radioClasses} value="education">Saving for a child's education</Radio>
      </RadioGroup>

      <RadioGroup
        label="How would you rate your investment knowledge and experience?"
        value={knowledge}
        onValueChange={setKnowledge as (value: string) => void}
        classNames={radioGroupClasses}
      >
        <Radio classNames={radioClasses} value="limited">Limited</Radio>
        <Radio classNames={radioClasses} value="fair">Fair</Radio>
        <Radio classNames={radioClasses} value="good">Good</Radio>
        <Radio classNames={radioClasses} value="excellent">Excellent</Radio>
        <Radio classNames={radioClasses} value="sophisticated">Sophisticated</Radio>
      </RadioGroup>

      <CheckboxGroup
        label="What other products have you previously invested in?"
        value={previousInvestments}
        onValueChange={setPreviousInvestments as (value: string[]) => void}
        classNames={checkboxGroupClasses}
      >
        <Checkbox classNames={checkboxClasses} value="alternative">Alternative Investments</Checkbox>
        <Checkbox classNames={checkboxClasses} value="bonds">Bonds</Checkbox>
        <Checkbox classNames={checkboxClasses} value="etfs">ETF's</Checkbox>
        <Checkbox classNames={checkboxClasses} value="mutual_funds">Mutual Funds</Checkbox>
        <Checkbox classNames={checkboxClasses} value="real_estate">Real Estate</Checkbox>
        <Checkbox classNames={checkboxClasses} value="stocks">Stocks</Checkbox>
        <Checkbox classNames={checkboxClasses} value="term_deposits">Term Deposits/GIC's</Checkbox>
        <Checkbox classNames={checkboxClasses} value="crypto">Cryptocurrencies</Checkbox>
        <Checkbox classNames={checkboxClasses} value="other">Other</Checkbox>
      </CheckboxGroup>

      <RadioGroup
        label="What is your primary investment objective?"
        value={objective}
        onValueChange={setObjective as (value: string) => void}
        classNames={radioGroupClasses}
      >
        <Radio classNames={radioClasses} value="preservation">Capital Preservation</Radio>
        <Radio classNames={radioClasses} value="passive_income">Passive Income</Radio>
        <Radio classNames={radioClasses} value="growth">Capital Growth</Radio>
        <Radio classNames={radioClasses} value="speculation">Speculation</Radio>
      </RadioGroup>

      <RadioGroup
        label="How would you describe your overall investment risk tolerance?"
        value={riskTolerance}
        onValueChange={setRiskTolerance as (value: string) => void}
        classNames={radioGroupClasses}
      >
        <Radio classNames={radioClasses} value="low">Low</Radio>
        <Radio classNames={radioClasses} value="low_medium">Low-Medium</Radio>
        <Radio classNames={radioClasses} value="medium">Medium</Radio>
        <Radio classNames={radioClasses} value="medium_high">Medium-High</Radio>
        <Radio classNames={radioClasses} value="high">High</Radio>
        <Radio classNames={radioClasses} value="extreme">Extreme</Radio>
      </RadioGroup>
    </div>
  );
}
