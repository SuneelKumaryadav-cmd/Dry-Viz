import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { HowItWorks } from "@/components/how-it-works";
import { FeaturesSection } from "@/components/features-section";
import { DemoSection } from "@/components/interactive-demo/demo-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <DemoSection />
    </main>
  );
}