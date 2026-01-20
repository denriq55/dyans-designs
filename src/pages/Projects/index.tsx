import "./index.css";
import type { Project } from "../../data/types";
import ProjectCard from "../../components/ProjectCard";

export default function Projects({
  title,
  containerType,
  projects,
}: {
  title: string;
  containerType: string;
  projects: Project[];
}) {
  return (
    <div className="main-page">
      <h2>{title}</h2>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <ProjectCard
            containerType={containerType}
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
