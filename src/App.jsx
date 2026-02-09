import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import BackgroundGlow from "./components/BackgroundGlow";
import CursorGlow from "./components/CursorGlow";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <VideoBackground src="/videos/hero.mp4" />
      <CursorGlow />
      <BackgroundGlow />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
