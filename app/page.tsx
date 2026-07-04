import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

const home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default home;
