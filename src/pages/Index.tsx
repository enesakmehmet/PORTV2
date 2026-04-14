import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import JournalSection from "@/components/JournalSection";
import ExplorationsSection from "@/components/ExplorationsSection";
import StatsSection from "@/components/StatsSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <HeroSection />
          <WorksSection />
          <JournalSection />
          <ExplorationsSection />
          <StatsSection />
          <ContactFooter />
        </>
      )}
    </>
  );
};

export default Index;
