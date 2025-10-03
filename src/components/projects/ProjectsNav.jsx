import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/ProjectsData';

const ProjectNav = ({ slug }) => {
  const internalProjects = projects.filter(p => !p.external);
  const currentIndex = internalProjects.findIndex(p => p.slug === slug);

  const prevProject = internalProjects[currentIndex - 1] || null;
  const nextProject = internalProjects[currentIndex + 1] || null;

  return (
    <div className="laguna__navProject">
      {prevProject && (
        <Link
          to={`/project/${prevProject.slug}`}
          className="laguna__navProject_button lagunahover-container"
          id="laguna__prevProject_button"
        >
          <div className="laguna__goback_button_arrow">
            <svg id="arrow-back" viewBox="0 0 36 31" width="24px">
              <path className="cls-1" style={{ fill: 'none', stroke: '#F0D4C0', strokeWidth: '4px' }} d="M35.5,15.5H2.5" />
              <path className="cls-1" style={{ fill: 'none', stroke: '#F0D4C0', strokeWidth: '4px' }} d="M16.6,2.2L3.3,15.5l13.3,13.3" />
            </svg>
          </div>
          <span>{prevProject.name}</span>
        </Link>
      )}

      {nextProject && (
        <Link
          to={`/project/${nextProject.slug}`}
          className="laguna__navProject_button lagunahover-container"
          id="laguna__nextProject_button"
        >
          <span>{nextProject.name}</span>
          <div className="laguna__goback_button_arrow">
            <svg id="arrow-forward" viewBox="0 0 36 31" width="24px" style={{ transform: 'scaleX(-1)' }}>
              <path className="cls-1" style={{ fill: 'none', stroke: '#F0D4C0', strokeWidth: '4px' }} d="M35.5,15.5H2.5" />
              <path className="cls-1" style={{ fill: 'none', stroke: '#F0D4C0', strokeWidth: '4px' }} d="M16.6,2.2L3.3,15.5l13.3,13.3" />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProjectNav;