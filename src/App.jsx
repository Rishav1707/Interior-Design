import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/AboutUs/About";
import LearnMore from "./components/LearnMore/LearnMore";
import Options from "./components/OptionsList/Options";
import Homey from "./components/Homey/Homey";

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About />
      <LearnMore />
      <Options />
      <Homey />
      <Footer/>
    </>
  );
};

export default App;
