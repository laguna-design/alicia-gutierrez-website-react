const HeroZoneMyInfo = () => {
  return (
    <section className="laguna__my--info">
      {
        <>
            <div className="laguna__my--info__col" id="laguna__my--info__currentlyAndPreviously">
                    <div className="laguna__my--info__module">
                        <h6>Currently</h6>
                        <dl>
                            <dt>Creative UI Designer</dt>
                            <dd><a className="lagunahover-container" target="_blank" href="https://dekuple.es/">Dékuple →</a></dd> 
                        </dl>	
                    </div>  
                    <div className="laguna__my--info__module">
                        <h6>Previously</h6>
                        <dl>
                            <dt>Creative UI & Brand Designer</dt>
                            <dd><a className="lagunahover-container" target="_blank" href="https://noobe.es/">← Noobe</a></dd> 
                        </dl>
                        
                    </div>
                </div>

                <div className="laguna__my--info__col laguna__my--info__module">
                    <h6>Also</h6>
                    <dl>
                        <dt>Freelance Illustrator</dt>
                        <dd><a className="lagunahover-container" target="_blank" href="https://www.instagram.com/laguna_illustrator/">Instagram →</a></dd> 
                    </dl>
                </div>
    
                <div className="laguna__my--info__col laguna__my--info__module">
                    <h6>Services</h6>
                    <dl>
                        <dt>Creative UI Design</dt>
                        <dt>UX Design</dt>
                        <dt>Design System</dt>
                        <dt>Art Direction</dt>
                        <dt>Brand Design</dt>
                        <dt>Motion Graphics</dt>
                        <dt>Front-end Dev</dt>
                    </dl>
                </div>

                <div className="laguna__my--info__col laguna__my--info__module">
                    <h6>Contact</h6>
                    <dl>
                        <dt><a className="lagunahover-container" target="_blank" href="mailto:aliciagutierrezdesign@gmail.com">aliciagutierrezdesign@gmail.com</a></dt>
                        <dd><a className="lagunahover-container" target="_blank" href="https://www.linkedin.com/in/alicia-gutierrez-design/">Linkedin →</a></dd> 
                    </dl>
                </div>
          
        </>
      }
    </section>
  );
};

export default HeroZoneMyInfo;