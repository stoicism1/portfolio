import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { Resume } from "./components/sections/Resume";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;