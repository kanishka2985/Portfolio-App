import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Achievement from "./components/Achievement";
export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Achievement />
      <Contact />
      <Footer />
    </div>
  );
}
