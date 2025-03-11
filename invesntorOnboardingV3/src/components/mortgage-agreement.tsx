import React from "react";
import { Card, CardBody, Switch } from "@heroui/react";

interface MortgageAgreementProps {
  agreementAccepted: boolean;
  setAgreementAccepted: (value: boolean) => void;
}

const switchClasses = {
  base: "data-[selected=true]:bg-primary",
  label: "text-white",
};

export function MortgageAgreement({
  agreementAccepted,
  setAgreementAccepted,
}: MortgageAgreementProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">Mortgage Service Agreement</h2>
        <p className="text-small text-white/60">Please review the agreement carefully</p>
      </div>

      <Card className="bg-content2 p-4">
        <CardBody>
          <div className="prose prose-invert max-w-none">
            <h3 className="text-white">Mortgage Service Agreement</h3>
            <p className="text-white/90">
              This Mortgage Service Agreement ("Agreement") is entered into between the investor ("You") 
              and our mortgage investment corporation ("We" or "Company").
            </p>
            
            <h4 className="text-white mt-4">1. Services</h4>
            <p className="text-white/90">
              We provide services related to mortgage investments, including but not limited to mortgage 
              assignments, administration, and management.
            </p>

            <h4 className="text-white mt-4">2. Legal Requirements</h4>
            <p className="text-white/90">
              You understand that mortgage assignments require legal documentation and must be processed 
              through a qualified legal professional.
            </p>

            <h4 className="text-white mt-4">3. Fees and Costs</h4>
            <p className="text-white/90">
              Legal fees associated with mortgage assignments are separate from our service fees and 
              will be clearly disclosed before any transaction.
            </p>

            <h4 className="text-white mt-4">4. Risk Disclosure</h4>
            <p className="text-white/90">
              Mortgage investments carry risks, including but not limited to default risk, interest rate 
              risk, and property value fluctuations.
            </p>

            <h4 className="text-white mt-4">5. Term and Termination</h4>
            <p className="text-white/90">
              This agreement remains in effect until terminated by either party with written notice as 
              specified in our terms and conditions.
            </p>
          </div>
        </CardBody>
      </Card>

      <div className="mt-4">
        <Switch
          isSelected={agreementAccepted}
          onValueChange={setAgreementAccepted}
          classNames={switchClasses}
        >
          I have read and agree to the Mortgage Service Agreement
        </Switch>
      </div>
    </div>
  );
}
