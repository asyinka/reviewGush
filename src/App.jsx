import "./App.css";
import FeaturesSection from "./Features";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default App;
