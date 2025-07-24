import TeamBuilder from "@/components/sections/TeamBuilder";
import { Suspense } from "react";

// Team Builder Page
export default function TeamBuilderPage() {
  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <Suspense fallback={<div>Loading Team Builder...</div>}>
        <TeamBuilder />
      </Suspense>
    </section>
  );
}
