// import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Hero from "./components/Hero";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <Navbar />
        {/* <Hero />
      <About /> */}
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

    </main>
  );
}

export default App;