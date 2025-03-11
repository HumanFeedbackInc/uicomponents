import React from "react";
import { Input, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface DocumentUploadProps {
  idImage: string;
  setIdImage: (value: string) => void;
  voidCheque: string;
  setVoidCheque: (value: string) => void;
  directDeposit: string;
  setDirectDeposit: (value: string) => void;
}

export function DocumentUpload({
  idImage,
  setIdImage,
  voidCheque,
  setVoidCheque,
  directDeposit,
  setDirectDeposit,
}: DocumentUploadProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white">Document Upload</h3>
        <p className="text-small text-white/60">
          Please provide the required documents for verification
        </p>
      </div>

      <Card className="bg-content2">
        <CardBody>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-small font-medium text-white">
                Government ID
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setIdImage(URL.createObjectURL(file));
                  }
                }}
                startContent={
                  <Icon 
                    icon="lucide:id-card" 
                    className="text-2xl text-white/60"
                  />
                }
                className="text-white"
                variant="bordered"
                classNames={{
                  input: "text-white",
                  label: "text-white",
                }}
              />
              {idImage && (
                <img 
                  src={idImage} 
                  alt="ID Preview" 
                  className="max-w-xs rounded-lg"
                />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-small font-medium text-white">
                Void Cheque
              </label>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setVoidCheque(file.name);
                  }
                }}
                startContent={
                  <Icon 
                    icon="lucide:file-text" 
                    className="text-2xl text-white/60"
                  />
                }
                className="text-white"
                variant="bordered"
                classNames={{
                  input: "text-white",
                  label: "text-white",
                }}
              />
              {voidCheque && (
                <p className="text-small text-white/60">
                  File uploaded: {voidCheque}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Input
                label="Direct Deposit Information"
                placeholder="Enter your direct deposit details"
                value={directDeposit}
                onChange={(e) => setDirectDeposit(e.target.value)}
                startContent={
                  <Icon 
                    icon="lucide:landmark" 
                    className="text-2xl text-white/60"
                  />
                }
                variant="bordered"
                classNames={{
                  input: "text-white",
                  label: "text-white",
                  inputWrapper: "text-white",
                }}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
