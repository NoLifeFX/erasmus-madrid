import type { ComponentType } from "react";
import SimContent from "@/content/sim";
import BankingContent from "@/content/banking";
import InsuranceContent from "@/content/insurance";

const registry: Record<string, ComponentType> = {
  "meilleure-carte-sim-espagne-erasmus": SimContent,
  "compte-bancaire-espagne-sans-nie": BankingContent,
  "assurance-erasmus-espagne": InsuranceContent,
};

export function getContentComponent(slug: string): ComponentType | undefined {
  return registry[slug];
}
