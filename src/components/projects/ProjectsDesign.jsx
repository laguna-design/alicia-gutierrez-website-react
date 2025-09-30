import projects from '../data/ProjectsData';

const DesignProjects = () => {

  const designProjects = projects.filter(project =>
  Array.isArray(project.section)
    ? project.section.includes('Design')
    : project.section === 'Design'
);


  return (
    <section id="laguna_work" className="laguna__selectedProjects">
      <ul className="laguna__Projects__list" id="laguna__Projects__list">
        {designProjects.map((project, index) => {
          const isHidden = project.hidden && !showAll;
          return (
            <li
              key={index}
              className={`laguna__Projects__single lagunahover-container ${
                project.hidden ? 'laguna__projects__single--hidden' : ''
              }`}
              data-img={project.img}
              section={project.section}
              style={{ display: isHidden ? 'none' : 'list-item' }}
            >
              <a
                href={project.href}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
              >
                <h3>{project.name}</h3>
                <div className="laguna__Projects__single__details">
                  <img
                    className="laguna__projects__thumbnnail__mobile"
                    src={project.img}
                    alt={project.name}
                  />
                  <div className="laguna__Projects__single__details__text">
                    <span className="laguna__Projects__single__details__client">
                      {project.client}
                    </span>
                    <span className="laguna__Projects__single__details__category">
                      {project.category}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DesignProjects;