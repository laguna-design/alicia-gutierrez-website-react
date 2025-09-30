// src/pages/ProjectPage.jsx
import { useParams } from 'react-router-dom';
import projects from '../components/data/ProjectsData';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="laguna__project__notfound">Project not found</div>;
  }

  return (
    <section className="laguna__project__page">
      <h1 className="laguna__project__title">{project.name}</h1>
      <img
        className="laguna__project__image"
        src={project.img}
        alt={project.name}
      />
      <div className="laguna__project__details">
        <p><strong>Client:</strong> {project.client}</p>
        <p><strong>Category:</strong> {project.category}</p>
        <p><strong>Section:</strong> {Array.isArray(project.section) ? project.section.join(', ') : project.section}</p>
      </div>
      {/* You can add more fields like description, gallery, etc. */}
    </section>
  );
};

export default ProjectPage;