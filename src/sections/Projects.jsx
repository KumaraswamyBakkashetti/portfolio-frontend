import Reveal from "./Reveal";
import ProjectCard from "../components/ProjectCard";
import VideoBackground from "../components/VideoBackground";
import Magnetic from "../components/Magnetic";
import { PROJECTS } from "../data/projectsData";


// display a decorative accent behind the grid
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
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id || i}>
              <Magnetic>
                <ProjectCard
                  title={p.title}
                  subtitle={p.subtitle}
                  desc={p.desc}
                  tech={p.tech}
                  url={p.url}
                />
              </Magnetic>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Projects;
