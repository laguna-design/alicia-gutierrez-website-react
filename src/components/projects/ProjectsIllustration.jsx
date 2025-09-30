import { Link } from 'react-router-dom';
import projects from '../data/ProjectsData';

const IllustrationProjects = () => {

const illustrationProjects = projects.filter(project =>
Array.isArray(project.section)
? project.section.includes('Illustration')
: project.section === 'Illustration'
);


return (
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

export default IllustrationProjects;