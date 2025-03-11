import React from "react";
import { RadioGroup, Radio, Switch } from "@heroui/react";
import type { ValueRange, IncomeRange } from "../types/form-types";

interface FinancialInfoProps {
  netWorth: ValueRange;
  setNetWorth: (value: ValueRange) => void;
  netFinancialAssets: ValueRange;
  setNetFinancialAssets: (value: ValueRange) => void;
  annualIncome: IncomeRange;
  setAnnualIncome: (value: IncomeRange) => void;
  legalAcknowledgment: boolean;
  setLegalAcknowledgment: (value: boolean) => void;
  insiderStatus: boolean;
  setInsiderStatus: (value: boolean) => void;
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

const switchClasses = {
  base: "data-[selected=true]:bg-primary",
  label: "text-white",
};

export function FinancialInfo({
  netWorth,
  setNetWorth,
  netFinancialAssets,
  setNetFinancialAssets,
  annualIncome,
  setAnnualIncome,
  legalAcknowledgment,
  setLegalAcknowledgment,
  insiderStatus,
  setInsiderStatus,
}: FinancialInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup
        label="What is the approximate value of your net worth?"
        value={netWorth}
        onValueChange={setNetWorth as (value: string) => void}
        classNames={radioGroupClasses}
      >
        <Radio classNames={radioClasses} value="less_50k">Less than $50K CDN</Radio>
        <Radio classNames={radioClasses} value="50k_100k">$50K CDN - $100K CDN</Radio>
        <Radio classNames={radioClasses} value="100k_250k">$100K CDN - $250K CDN</Radio>
        <Radio classNames={radioClasses} value="250k_1m">$250K CDN - $1M CDN</Radio>
        <Radio classNames={radioClasses} value="1m_5m">$1M CDN - $5M CDN</Radio>
        <Radio classNames={radioClasses} value="more_5m">$5M+ CDN</Radio>
      </RadioGroup>

      <RadioGroup
        label="What is the approximate value of your net financial assets?"
        value={netFinancialAssets}
        onValueChange={setNetFinancialAssets as (value: string) => void}
        classNames={radioGroupClasses}
      >
        <Radio classNames={radioClasses} value="less_50k">Less than $50K CDN</Radio>
        <Radio classNames={radioClasses} value="50k_100k">$50K CDN - $100K CDN</Radio>
        <Radio classNames={radioClasses} value="100k_250k">$100K CDN - $250K CDN</Radio>
        <Radio classNames={radioClasses} value="250k_1m">$250K CDN - $1M CDN</Radio>
        <Radio classNames={radioClasses} value="1m_5m">$1M CDN - $5M CDN</Radio>
        <Radio classNames={radioClasses} value="more_5m">$5M+ CDN</Radio>
      </RadioGroup>

      <RadioGroup
        label="What is your annual household income?"
        value={annualIncome}
        onValueChange={setAnnualIncome as (value: string) => void}
        classNames={radioGroupClasses}
      >
        <Radio classNames={radioClasses} value="less_50k">Less than $50K CDN</Radio>
        <Radio classNames={radioClasses} value="50k_100k">$50K CDN - $100K CDN</Radio>
        <Radio classNames={radioClasses} value="100k_250k">$100K CDN - $250K CDN</Radio>
        <Radio classNames={radioClasses} value="250k_500k">$250K CDN - $500K CDN</Radio>
        <Radio classNames={radioClasses} value="500k_1m">$500K CDN - $1M CDN</Radio>
        <Radio classNames={radioClasses} value="1m_5m">$1M CDN - $5M CDN</Radio>
        <Radio classNames={radioClasses} value="more_5m">$5M+ CDN</Radio>
      </RadioGroup>

      <div className="flex flex-col gap-4">
        <Switch
          isSelected={legalAcknowledgment}
          onValueChange={setLegalAcknowledgment}
          classNames={switchClasses}
        >
          I acknowledge that the purchase or sale of a mortgage assignment will require working with a lawyer
        </Switch>

        <Switch
          isSelected={insiderStatus}
          onValueChange={setInsiderStatus}
          classNames={switchClasses}
        >
          I am an insider of a reporting issuer, an insider of any other issuer whose securities are publicly traded, or a politically exposed person
        </Switch>
      </div>
    </div>
  );
}
