import { useParams } from 'react-router-dom';
import CloseBtn from '../buttons/Close';
import projects from '../data/ProjectsData';
import IconLink from '../icons/IconLink';

const OverlayProjectDetails = () => {
const { slug } = useParams();
const project = projects.find(p => p.slug === slug);

if (!project) return null;

return (
	<div id="laguna__overlay_design_BG" className="laguna__overlay_BG" data-overlay="info">
	<div id="laguna__overlay_info" className="laguna__overlay">
		<section className="laguna__Projects">
		<div className="laguna__bigTitle">
			<h3>{project.name}</h3>
			<CloseBtn overlay="info" />
		</div>

		<div className="laguna__Projects__single__details" style={{ width: 'auto' }}>
			<div className="laguna__Projects__single__details__text">
			<div className="laguna__Projects__single__details__text__header">
				<span className="laguna__Projects__single__details__client">{project.client}</span>
				<span className="laguna__Projects__single__details__category">{project.category}</span>
			</div>

			{project.prototypes && (
				<div className="laguna__projects__single__details__prototypes">
				<h6>Figma prototypes</h6>
				<div className="laguna__projects__single__details__prototypes_links">
					{project.prototypes.map((proto, i) => (
					<dl key={i}>
						<dt>{proto.title}</dt>
						<dd>
						<a
							className="lagunahover-container"
							href={proto.desktop}
							target="_blank"
							rel="noopener noreferrer"
						>
							Desktop {<IconLink />}
						</a>
						</dd>
						<dd>
						<a
							className="lagunahover-container"
							href={proto.mobile}
							target="_blank"
							rel="noopener noreferrer"
						>
							Mobile {<IconLink />}
						</a>
						</dd>
					</dl>
					))}
				</div>
				</div>
			)}
			</div>
		</div>
		</section>
	</div>
	</div>
);
};

export default OverlayProjectDetails;