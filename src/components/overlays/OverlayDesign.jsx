import TitleMyDesignProjects from '../titles/MyDesignProjectsTitle'
import DesignProjects from '../projects/ProjectsDesign';

const OverlayDesign = () => {
    return (
    <>
        <div id="laguna__overlay_design_BG" className="laguna__overlay_BG" data-overlay="design">
            <div id="laguna__overlay_design" className="laguna__overlay">        
                <section className="laguna__Projects">
                <TitleMyDesignProjects />
                <DesignProjects />
                </section>
            </div>
        </div>
    </>
  );
};

export default OverlayDesign;
