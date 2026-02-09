import Reveal from "./Reveal";
import ProjectCard from "../components/ProjectCard";
import VideoBackground from "../components/VideoBackground";


const projects = [
  {
    title: "AI Wiki Quiz Generator",
    desc: "LLM-powered quiz creation from Wikipedia articles."
  },
  {
    title: "Agent Monitor",
    desc: "Multi-agent safety and validation framework."
  },
  {
    title: "E-Commerce Platform",
    desc: "High-performance full-stack commerce system."
  }
];

const Projects = () => {
  return (
    <section
  id="projects"
  className="relative min-h-screen px-6 py-32 overflow-hidden"
>
  <VideoBackground src="/videos/projects.mp4" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Selected Work
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <Reveal key={i}>
              <ProjectCard title={p.title} desc={p.desc} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
