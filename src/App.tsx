import { About } from "./components/About";
import { ApplicationForm } from "./components/ApplicationForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Recruitment } from "./components/Recruitment";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Recruitment />
      <Footer />
    </>
  );
};

export default App;
