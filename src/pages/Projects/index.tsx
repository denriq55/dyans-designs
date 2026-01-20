import "./index.css";
import type { Project } from "../../data/types";
import ProjectCard from "../../components/ProjectCard";

export default function Projects({
  title,
  container,
  projects,
}: {
  title: string;
  container: string;
  projects: Project[];
}) {
  return (
    <div className="projects-container">
      <h2>{title}</h2>
      <div className={container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
