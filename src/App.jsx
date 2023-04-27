import "./App.css";
import FeaturesSection from "./Features";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import WaitlistSection from "./Waitlist";
import FooterSection from "./footer";
const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <WaitlistSection />
      <FooterSection />
    </div>
  );
};

export default App;
