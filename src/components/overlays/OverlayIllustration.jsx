import TitleMyIllustrationProjects from '../titles/MyIllustrationProjects'
import IllustrationProjects from '../projects/ProjectsIllustration';

const OverlayIllustration = () => {
    return (
    <>
        <div id="laguna__overlay_design_BG" className="laguna__overlay_BG" data-overlay="illustration">
            <div id="laguna__overlay_design" className="laguna__overlay">        
                <section className="laguna__Projects">
                    <TitleMyIllustrationProjects />
                    <IllustrationProjects />
                </section>
            </div>
        </div>
    </>
  );
};

export default OverlayIllustration;