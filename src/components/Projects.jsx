const projects = [
  {
    name: 'Cines Golem',
    href: 'single-pages/laguna-golem.html',
    img: 'src/assets/img/projects/golem-thumbnail.png',
    client: 'Personal Project',
    category: 'Ui / Branding',
    section: 'Design',
    external: false
  },
  {
    name: 'Bridgestone',
    href: 'single-pages/laguna-bridgestone.html',
    img: 'src/assets/img/projects/Brisgestone-_-Thumbnail-5-2.png',
    client: 'Bridgestone',
    category: 'Ui / Ux',
    section: 'Design',
    external: false
  },
  {
    name: 'Endesa Portugal',
    href: 'single-pages/laguna-endesa.html',
    img: 'src/assets/img/projects/Endesa-_-Thumbnail-2.png',
    client: 'Endesa',
    category: 'Ui / Branding',
    section: 'Design',
    external: false
  },
  {
    name: 'Dékuple',
    href: 'single-pages/laguna-dekuple.html',
    img: 'src/assets/img/projects/demodek-thumbnail.jpg',
    client: 'Dékuple',
    category: 'Ui / Ux',
    section: 'Design',
    external: false
  },
  {
    name: 'TypoMotion Explorations',
    href: 'single-pages/laguna-typomotion-explorations.html',
    img: 'src/assets/img/projects/typomotion_Thumbnail.png',
    client: 'Just for fun',
    category: 'Motion Graphics',
    section: 'Design',
    external: false
  },
  {
    name: 'Padilla (Fish Take Away)',
    href: 'single-pages/laguna-padilla.html',
    img: 'src/assets/img/projects/padilla-thumbnail.jpg',
    client: 'Freelance work',
    category: 'Ui / Ux / Branding / Illustration / Packaging',
    section: 'Design',
    external: false
  },
  {
    name: 'Siren',
    href: 'https://www.instagram.com/laguna_illustrator/p/C0luA9Ptz2b/?img_index=1',
    img: 'src/assets/img/projects/siren-thumbnail.jpg',
    client: 'Personal Project',
    category: 'Illustration',
    section: 'Illustration',
    external: true

  },
  {
    name: 'Recircle Awards',
    href: 'single-pages/laguna-recircle-awards.html',
    img: 'src/assets/img/projects/ra-thumbnail.png',
    client: 'Valebridge',
    category: 'UI / Ux / Branding',
    section: 'Design',
    external: false

  },
  {
    name: 'El otro lado',
    href: 'https://www.instagram.com/laguna_illustrator/p/C12DO4LNKSs/?img_index=1',
    img: 'src/assets/img/projects/el-otro-lado-thumbnail.jpg',
    client: 'Personal Project',
    category: 'Illustration',
    section: 'Illustration',
    external: true

  },
  {
    name: 'El otro lado',
    href: 'https://www.instagram.com/laguna_illustrator/p/C12DO4LNKSs/?img_index=1',
    img: 'src/assets/img/projects/el-otro-lado-thumbnail.jpg',
    client: 'Personal Project',
    category: 'Illustration',
    section: 'Illustration',
    external: true

  },
];

const SelectedProjects = () => {
  return (
    <ul className="laguna__Projects__list" id="laguna__Projects__list">
      {projects.map((project, index) => (
        <li
          key={index}
          className="laguna__Projects__single lagunahover-container"
          data-img={project.img}
          section={project.section}
        >
          <a href={project.href} target={project.external ? '_blank' : undefined}>
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
        </li>
      ))}
    </ul>
   
  );
};

export default SelectedProjects;




/*<section id="laguna_work" class="laguna__selectedProjects">

        <ul class="laguna__Projects__list" id="laguna__Projects__list">

            <li class="laguna__Projects__single lagunahover-container laguna__projects__single--hidden laguna__Projects__external_link"  data-img="src/assets/img/projects/lotR-thumbnail.jpg">
                
                <a href="https://www.instagram.com/laguna_illustrator/p/C7r9U-NsII5/?img_index=1" target="_blank">
                    <h3>
                        LotR fantart / Gollum
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 41.6 41.6">
                            <g>
                                <g id="Layer_1">
                                <g>
                                    <path class="laguna--external-link" d="M15,26.6L40.1,1.5"/>
                                    <path class="laguna--external-link" d="M39.5,22.3V2.1s-20.2,0-20.2,0"/>
                                </g>
                                <polyline class="laguna--external-link" points="39.5 31.2 39.5 39.5 2.1 39.5 2.1 2.1 10.4 2.1"/>
                                </g>
                            </g>
                        </svg>
                    </h3>
                    <div class="laguna__Projects__single__details">
                       <img class="laguna__projects__thumbnnail__mobile" src="src/assets/img/projects/lotR-thumbnail.jpg">
                        <div class="laguna__Projects__single__details__text">
                            <span class="laguna__Projects__single__details__client">Personal Project</span>
                                <span class="laguna__Projects__single__details__category">Illustration</span>
                        </div>
                    </div>
                </a>
            </li>

            <li class="laguna__Projects__single lagunahover-container laguna__projects__single--hidden laguna__Projects__external_link"  data-img="src/assets/img/projects/lotR-eowyn-thumbnail.jpg">
                <a href="https://www.instagram.com/laguna_illustrator/p/C5WlOw0LgmD/?img_index=1" target="_blank">
                    <h3>
                        LotR fantart / Eowyn
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 41.6 41.6">
                            <g>
                                <g id="Layer_1">
                                <g>
                                    <path class="laguna--external-link" d="M15,26.6L40.1,1.5"/>
                                    <path class="laguna--external-link" d="M39.5,22.3V2.1s-20.2,0-20.2,0"/>
                                </g>
                                <polyline class="laguna--external-link" points="39.5 31.2 39.5 39.5 2.1 39.5 2.1 2.1 10.4 2.1"/>
                                </g>
                            </g>
                        </svg>
                    </h3>
                    <div class="laguna__Projects__single__details">
                       <img class="laguna__projects__thumbnnail__mobile" src="src/assets/img/projects/lotR-eowyn-thumbnail.jpg">
                        <div class="laguna__Projects__single__details__text">
                            <span class="laguna__Projects__single__details__client">Personal Project</span>
                                <span class="laguna__Projects__single__details__category">Illustration</span>
                        </div>
                    </div>
                </a>
            </li>

            <li class="laguna__Projects__single lagunahover-container laguna__projects__single--hidden laguna__Projects__external_link"  data-img="src/assets/img/projects/abubilla-thumbnail.png">
                <a href="https://www.instagram.com/laguna_illustrator/p/Cm3wzC2rATY/" target="_blank">
                    <h3>
                        Abubilla
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 41.6 41.6">
                            <g>
                                <g id="Layer_1">
                                <g>
                                    <path class="laguna--external-link" d="M15,26.6L40.1,1.5"/>
                                    <path class="laguna--external-link" d="M39.5,22.3V2.1s-20.2,0-20.2,0"/>
                                </g>
                                <polyline class="laguna--external-link" points="39.5 31.2 39.5 39.5 2.1 39.5 2.1 2.1 10.4 2.1"/>
                                </g>
                            </g>
                        </svg>
                    </h3>
                    <div class="laguna__Projects__single__details">
                       <img class="laguna__projects__thumbnnail__mobile" src="src/assets/img/projects/abubilla-thumbnail.png">
                        <div class="laguna__Projects__single__details__text">
                            <span class="laguna__Projects__single__details__client">Personal Project</span>
                                <span class="laguna__Projects__single__details__category">Illustration</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
       
        <article style="margin-top: 4rem; text-align: center;">
            <button id="laguna__projects__toggleButton" class="laguna__button__light lagunahover-container">Show All</button>
        </article>

    </section>*/