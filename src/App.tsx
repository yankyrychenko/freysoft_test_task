import { Header } from "./components/Header";
import { Inroduction } from "./components/Inroduction";
import { About } from "./components/About";
import { Recruitment } from "./components/Recruitment";
import { Footer } from "./components/Footer";
import { Benefits } from "./components/Benefits";
import { Vacancies } from "./components/Vacancies";
import { Perks } from "./components/Perks";

const App = () => {
  return (
    <>
      <Header />
      <Inroduction />
      <About />
      <Recruitment />
      <Benefits />
      <Vacancies />
      <Perks />
      <Footer />
    </>
  );
};

export default App;
