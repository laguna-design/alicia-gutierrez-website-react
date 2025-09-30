// src/pages/ProjectPage.jsx
import { useParams } from 'react-router-dom';
import projects from '../components/data/ProjectsData';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="project-page">
      <h1>{project.name}</h1>
      <img src={project.img} alt={project.name} />
      <p><strong>Client:</strong> {project.client}</p>
      <p><strong>Category:</strong> {project.category}</p>
      {/* Add more fields as needed */}
    </section>
  );
};

export default ProjectPage;