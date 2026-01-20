import "./index.css";

export default function ProjectCard({
  project,
}: {
  project: {
    id: number;
    name: string;
    description: string;
    link: string;
    img: string;
  };
}) {
  return (
    <div className="project-card">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </a>
      <img src={project.img} alt={project.name} />
    </div>
  );
}
