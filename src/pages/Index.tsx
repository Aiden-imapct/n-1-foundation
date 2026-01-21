import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunityImpactSection from "@/components/CommunityImpactSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <ProgramsSection />
        <TestimonialsSection />
        <CommunityImpactSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
