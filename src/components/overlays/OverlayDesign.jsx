import MyDesignProjects from '../titles/MyDesignProjectsTitle'
import Projects from '../Projects'

const OverlayDesign = () => {
  
   
    return (
    <>
        <div id="laguna__overlay_design_BG" className="laguna__overlay_BG" data-overlay="design">
            <div id="laguna__overlay_design" className="laguna__overlay">        
                <section className="laguna__Projects">
                    <MyDesignProjects />
                    <Projects />
                </section>
            </div>
        </div>
    </>
  );
};

export default OverlayDesign;
