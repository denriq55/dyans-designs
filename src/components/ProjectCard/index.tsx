import type { Categories, Project } from "../../data/types";
import "./index.css";

export default function ProjectCard({
  project,
  category,
}: {
  project: Project;
  category: Categories;
}) {
  return (
    <div className={`project-card ${category}`}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </a>
      <img src={project.img} alt={project.name} />
    </div>
  );
}
