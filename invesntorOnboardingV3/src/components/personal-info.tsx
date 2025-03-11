import React from "react";
import { Input, Select, SelectItem, Divider } from "@heroui/react";
import type { PersonalInfo, Address, Employment } from "../types/form-types";

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: (info: PersonalInfo) => void;
  address: Address;
  setAddress: (address: Address) => void;
  employment: Employment;
  setEmployment: (employment: Employment) => void;
}

const inputClasses = {
  label: "text-white",
  input: "text-white",
  inputWrapper: "border-white/30",
};

const selectClasses = {
  label: "text-white",
  trigger: "text-white data-[hover=true]:bg-white/10",
  value: "text-white",
  listbox: "bg-content2",
  listboxItem: "text-white data-[hover=true]:bg-white/10",
};

export function PersonalInfoForm({
  personalInfo,
  setPersonalInfo,
  address,
  setAddress,
  employment,
  setEmployment,
}: PersonalInfoFormProps) {
  const employmentStatuses = [
    "Employed",
    "Self-Employed",
    "Retired",
    "Student",
    "Unemployed",
  ];

  const countries = ["Canada", "United States"];
  const provinces = ["Ontario", "Quebec", "British Columbia", "Alberta"];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Personal Profile</h3>
          <p className="text-small text-white/60">Your basic information and contact details</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            value={personalInfo.firstName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, firstName: e.target.value })
            }
            classNames={inputClasses}
          />
          <Input
            label="Last Name"
            value={personalInfo.lastName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, lastName: e.target.value })
            }
            classNames={inputClasses}
          />
          <Input
            label="Date of Birth"
            type="date"
            value={personalInfo.dateOfBirth}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })
            }
            classNames={inputClasses}
          />
          <Input
            label="Phone Number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="XXX-XXX-XXXX"
            value={personalInfo.phoneNumber}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
            }
            classNames={inputClasses}
          />
          <Input
            label="SIN"
            value={personalInfo.sin}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, sin: e.target.value })
            }
            classNames={inputClasses}
          />
          <Input
            label="Email"
            type="email"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
            classNames={inputClasses}
          />
        </div>
      </div>

      <Divider className="bg-white/20"/>

      <div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Residential Address</h3>
          <p className="text-small text-white/60">Your current residential address information</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Street Name & Number"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            classNames={inputClasses}
          />
          <Input
            label="Unit #"
            value={address.unit}
            onChange={(e) => setAddress({ ...address, unit: e.target.value })}
            classNames={inputClasses}
          />
          <Input
            label="Postal Code"
            value={address.postalCode}
            onChange={(e) =>
              setAddress({ ...address, postalCode: e.target.value })
            }
            classNames={inputClasses}
          />
          <Select
            label="Country"
            selectedKeys={[address.country]}
            onChange={(e) =>
              setAddress({ ...address, country: e.target.value })
            }
            classNames={selectClasses}
          >
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Province"
            selectedKeys={[address.province]}
            onChange={(e) =>
              setAddress({ ...address, province: e.target.value })
            }
            classNames={selectClasses}
          >
            {provinces.map((province) => (
              <SelectItem key={province} value={province}>
                {province}
              </SelectItem>
            ))}
          </Select>
          <Input
            label="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            classNames={inputClasses}
          />
        </div>
      </div>

      <Divider className="bg-white/20"/>

      <div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Employment Information</h3>
          <p className="text-small text-white/60">Your current employment status and occupation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Employment Status"
            selectedKeys={[employment.status]}
            onChange={(e) =>
              setEmployment({ ...employment, status: e.target.value })
            }
            classNames={selectClasses}
          >
            {employmentStatuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </Select>
          <Input
            label="Occupation"
            value={employment.occupation}
            onChange={(e) =>
              setEmployment({ ...employment, occupation: e.target.value })
            }
            classNames={inputClasses}
          />
        </div>
      </div>
    </div>
  );
}
