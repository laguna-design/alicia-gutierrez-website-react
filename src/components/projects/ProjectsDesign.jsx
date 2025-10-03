	import { useState } from 'react';
	import { Link } from 'react-router-dom';

	import projects from '../data/ProjectsData';

	const DesignProjects = () => {

	const designProjects = projects.filter(project =>
	Array.isArray(project.section)
	? project.section.includes('Design')
	: project.section === 'Design'
	);

	return (
	<ul className="laguna__Projects__list" id="laguna__Projects__list">
	{designProjects.map((project, index) => {
	const isHidden = project.hidden;

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
		{project.external ? (
			<a
			href={project.href}
			target="_blank"
			rel="noopener noreferrer"
			className="lagunahover-container"
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
		) : (
			<Link
			to={`/project/${project.slug}`}
			className="lagunahover-container"
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
			</Link>
		)}
		</li>
	);
	})}
	</ul>
	);
	};

	export default DesignProjects;