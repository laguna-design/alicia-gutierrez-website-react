import { useParams } from 'react-router-dom';
import projects from '../components/data/ProjectsData';
import ScrollEffects from '../js/ScrollEffects';
import OverlayProjectDetails from '../components/overlays/OverlayProjectDetails';
import ProjectNav from '../components/projects/ProjectsNav';

const ProjectPage = () => {
const { slug } = useParams();
const project = projects.find(p => p.slug === slug);

if (!project) {
	return <div className="laguna__project__notfound">Project not found</div>;
}

return (
	<>
	<section className="laguna__single">
		<div className="laguna__single__clip">
		{/* Desktop horizontal images with scroll effects */}
		<ScrollEffects>
			{project.imagesH.map((imgPath, index) => (
			<img
				key={`desktop-${index}`}
				src={imgPath} // Already transformed in ProjectsData
				alt={`${project.name} horizontal ${index + 1}`}
			/>
			))}
		</ScrollEffects>

		{/* Mobile horizontal images */}
		<div className="laguna__single__clip_content laguna__single__mobile">
			{project.imagesH.map((imgPath, index) => (
			<img
				key={`mobile-${index}`}
				src={imgPath}
				alt={`${project.name} mobile horizontal ${index + 1}`}
			/>
			))}
		</div>

		{/* Footer with project info and overlay triggers */}
		<footer className="laguna__single__footer">
			<div className="laguna_projects_singlepage_details">
				<h3>{project.name}</h3>
				{project.prototypes?.some(p => p.items?.length > 0) && (
					<button
						className="laguna__button__light laguna__trigger_btn lagunahover-container"
						id="laguna__button__info"
						data-overlay="info"
					>
						+ info
					</button>
				)}

			</div>
			<button
			className="laguna__button__light laguna__trigger_btn lagunahover-container"
			data-overlay="design"
			>
			Design Projects
			</button>
		</footer>
		</div>
	</section>

	{/* Overlay and navigation */}
	<OverlayProjectDetails project={project} />
	<ProjectNav slug={slug} />
	</>
);
};

export default ProjectPage;