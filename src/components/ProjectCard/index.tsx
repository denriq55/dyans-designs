import type { Project } from "../../data/types";
import "./index.css";

export default function ProjectCard({
  project,
  containerType,
}: {
  project: Project;
  containerType: string;
}) {
  return (
    <div className={`project-card ${containerType}`}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </a>
      <img src={project.img} alt={project.name} />
    </div>
  );
}
