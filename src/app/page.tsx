import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <ContactSection />
    </>
  );
}
