import projects from '../data/ProjectsData';

const IllustrationProjects = () => {

  const illustrationProjects = projects.filter(project =>
  Array.isArray(project.section)
    ? project.section.includes('Illustration')
    : project.section === 'Illustration'
);


  return (
    <section id="laguna_work" className="laguna__selectedProjects">
      <ul className="laguna__Projects__list" id="laguna__Projects__list">
        {illustrationProjects.map((project, index) => {
          const isHidden = project.hidden;
          return (
            <li
                key={index}
                className="laguna__Projects__single lagunahover-container"
                data-img={project.img}
                section={project.section}
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

export default IllustrationProjects;