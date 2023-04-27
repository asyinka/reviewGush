import "./App.css";
import FeaturesSection from "./pages/Features";
import HeroSection from "./pages/HeroSection";
import NavBar from "./pages/NavBar";
import WaitlistSection from "./pages/Waitlist";
import FooterSection from "./pages/footer";
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
