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
			<ScrollEffects>
			{project.imagesH.map((src, i) => (
				<img key={i} src={src} alt={`Horizontal ${i + 1}`} />
			))}
			</ScrollEffects>

			<div className="laguna__single__clip_content laguna__single__mobile">
			{project.imagesV.map((src, i) => (
				<img key={i} src={src} alt={`Vertical ${i + 1}`} />
			))}
			</div>

			<footer className="laguna__single__footer">
			<div className="laguna_projects_singlepage_details">
				<h3>{project.name}</h3>
				<button
				className="laguna__button__light laguna__trigger_btn lagunahover-container"
				id="laguna__button__info"
				data-overlay="info"
				>
				+ info
				</button>
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
		<OverlayProjectDetails project={project} />
		<ProjectNav slug={slug} />

	</>
	
);

};

export default ProjectPage;