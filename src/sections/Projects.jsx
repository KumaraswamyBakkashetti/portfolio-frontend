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
      {/* decorative blurred blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-neon/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-neonPink/20 rounded-full blur-3xl" />
      </div>
      <VideoBackground src="/videos/projects.mp4" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center relative inline-block">
            Selected Work
            <span className="absolute left-1/2 bottom-[-8px] w-24 h-1 bg-gradient-to-r from-neon to-neonPink -translate-x-1/2 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {PROJECTS.map((p, i) => (
            <Magnetic key={p.id || i}>
              <ProjectCard
                title={p.title}
                subtitle={p.subtitle}
                desc={p.desc}
                tech={p.tech}
                url={p.url}
              />
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Projects;
