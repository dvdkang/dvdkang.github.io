import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
