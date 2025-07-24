export interface CountryOption {
  value: string;
  label: string;
  currency: string;
}

export const countries: CountryOption[] = [
  { value: "us", label: "United States", currency: "USD" },
  { value: "au", label: "Australia", currency: "AUD" },
  { value: "gb", label: "United Kingdom", currency: "GBP" },
  // Add more countries as needed
];

export type WorkSetupOption = "Office" | "Hybrid" | "Home";

export const workSetups: WorkSetupOption[] = ["Office", "Hybrid", "Home"];
