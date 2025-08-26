import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-youtube-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
