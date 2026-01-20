import "./index.css";
import type { Categories, Project } from "../../data/types";
import ProjectCard from "../../components/ProjectCard";

export default function Projects({
  category,
  projects,
}: {
  category: Categories;
  projects: Project[];
}) {
  return (
    <div className="main-page">
      <h2>{category.toUpperCase()}</h2>
      <div className={`projects-wrapper ${category}`}>
        {projects.map((project) => (
          <ProjectCard category={category} key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
