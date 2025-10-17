import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import projects from '../components/data/ProjectsData';
import ScrollEffects from '../js/ScrollEffects';
import CustomCursor from '../js/CustomCursor';
import OverlayManager from '../js/OverlayManager';

import OverlayProjectDetails from '../components/overlays/OverlayProjectDetails';
import ProjectNav from '../components/projects/ProjectsNav';

// Utility to detect video files
const isVideo = (path) => /\.(mp4|webm|ogg)$/i.test(path);

const ProjectPage = () => {
const { slug } = useParams();
const location = useLocation();
const project = projects.find(p => p.slug === slug);

// Close overlay on route change
useEffect(() => {
	const closeOverlay = () => {
	const activeOverlay = document.querySelector('.laguna__overlay_BG.active');
	if (activeOverlay) {
		activeOverlay.classList.remove('active');
		document.body.classList.remove('overlay-open');
	}
	};
	closeOverlay();
}, [location]);

if (!project) {
	return <div className="laguna__project__notfound">Project not found</div>;
}

return (
	<>
	<section className="laguna__single">
		<div className="laguna__single__clip">
	
		{/* Desktop horizontal media */}
		<ScrollEffects>
			 {slug === 'typomotion-explorations' && (
				<div style={{ padding: '0 5rem', }}>
					<h2 style={{ marginBottom: '0', }}>
						Just some<br />motion graphics<br />for fun!
					</h2>
					<p>(made with After Effects)</p>
				</div>
			)}

			{project.imagesH.map((mediaPath, index) =>
			isVideo(mediaPath) ? (
				<video
				key={`desktop-video-${index}`}
				src={mediaPath}
				autoPlay
				muted
				loop
				playsInline
				className="laguna__video"
				/>
			) : (
				<img
				key={`desktop-img-${index}`}
				src={mediaPath}
				alt={`${project.name} horizontal ${index + 1}`}
				/>
			)
			)}
		</ScrollEffects>

		{/* Mobile horizontal media */}
		<div className="laguna__single__clip_content laguna__single__mobile">
			{project.imagesH.map((mediaPath, index) =>
			isVideo(mediaPath) ? (
				<video
				key={`mobile-video-${index}`}
				src={mediaPath}
				autoPlay
				muted
				loop
				playsInline
				className="laguna__video"
				/>
			) : (
				<img
				key={`mobile-img-${index}`}
				src={mediaPath}
				alt={`${project.name} mobile horizontal ${index + 1}`}
				/>
			)
			)}
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
	<CustomCursor />
	<OverlayManager />
	</>
);
};

export default ProjectPage;