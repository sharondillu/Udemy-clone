
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsCarousel from "./components/SkillsCarousel";
import AISection from "./components/AISection";
import SkillsSection from "./components/SkillsSection";
import TrustedBySection from "./components/TrustedBySection";
import TestimonialSection from "./components/TestimonialSection";
import CertifiedSection from "./components/CertifiedSection";
import ReimagineCareer from "./components/ReimagineCareer";
import TrendingCourses from "./components/TrendingCourses";
import PopularSkillsSection from "./components/PopularSkillsSection";
import CompanyStrip from "./components/CompanyStrip";
import ExploreSkills from "./components/ExploreSkills";
import Footer from "./components/Footer";
import LearnAISection from "./components/LearnAISection";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <SkillsCarousel/>
      <LearnAISection/>
      <AISection />
      <SkillsSection/>
      <TrustedBySection />
      <TestimonialSection />
      <CertifiedSection/>
      <ReimagineCareer/>
      <TrendingCourses/>
      <PopularSkillsSection/>
      <CompanyStrip/>
      <ExploreSkills/>
      <Footer/>
      
    </div>
  );
}

export default App;
