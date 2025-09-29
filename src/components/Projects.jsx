import { useState } from 'react';
import ShowAll from './buttons/ShowAll';

const projects = [
    {
        name: 'Cines Golem',
        href: 'single-pages/laguna-golem.html',
        img: 'src/assets/img/projects/golem-thumbnail.png',
        client: 'Personal Project',
        category: 'Ui / Branding',
        section: 'Design',
        external: false,
        hidden: false
    },
    {
        name: 'Bridgestone',
        href: 'single-pages/laguna-bridgestone.html',
        img: 'src/assets/img/projects/Brisgestone-_-Thumbnail-5-2.png',
        client: 'Bridgestone',
        category: 'Ui / Ux',
        section: 'Design',
        external: false,
        hidden: false
    },
    {
        name: 'Endesa Portugal',
        href: 'single-pages/laguna-endesa.html',
        img: 'src/assets/img/projects/Endesa-_-Thumbnail-2.png',
        client: 'Endesa',
        category: 'Ui / Branding',
        section: 'Design',
        external: false,
        hidden: false
    },
    {
        name: 'Dékuple',
        href: 'single-pages/laguna-dekuple.html',
        img: 'src/assets/img/projects/demodek-thumbnail.jpg',
        client: 'Dékuple',
        category: 'Ui / Ux',
        section: 'Design',
        external: false,
        hidden: false
    },
    {
        name: 'TypoMotion Explorations',
        href: 'single-pages/laguna-typomotion-explorations.html',
        img: 'src/assets/img/projects/typomotion_Thumbnail.png',
        client: 'Just for fun',
        category: 'Motion Graphics',
        section: 'Design',
        external: false,
        hidden: false
    },
    {
        name: 'Padilla (Fish Take Away)',
        href: 'single-pages/laguna-padilla.html',
        img: 'src/assets/img/projects/padilla-thumbnail.jpg',
        client: 'Freelance work',
        category: 'Ui / Ux / Branding / Illustration / Packaging',
        section: 'Design',
        external: false,
        hidden: false
    },
    {
        name: 'Siren',
        href: 'https://www.instagram.com/laguna_illustrator/p/C0luA9Ptz2b/?img_index=1',
        img: 'src/assets/img/projects/siren-thumbnail.jpg',
        client: 'Personal Project',
        category: 'Illustration',
        section: 'Illustration',
        external: true,
        hidden: false

    },
    {
        name: 'Recircle Awards',
        href: 'single-pages/laguna-recircle-awards.html',
        img: 'src/assets/img/projects/ra-thumbnail.png',
        client: 'Valebridge',
        category: 'UI / Ux / Branding',
        section: 'Design',
        external: false,
        hidden: false

    },
    {
        name: 'El otro lado',
        href: 'https://www.instagram.com/laguna_illustrator/p/C12DO4LNKSs/?img_index=1',
        img: 'src/assets/img/projects/el-otro-lado-thumbnail.jpg',
        client: 'Personal Project',
        category: 'Illustration',
        section: 'Illustration',
        external: true,
        hidden: true
    },
    {
        name: 'El otro lado',
        href: 'https://www.instagram.com/laguna_illustrator/p/C12DO4LNKSs/?img_index=1',
        img: 'src/assets/img/projects/el-otro-lado-thumbnail.jpg',
        client: 'Personal Project',
        category: 'Illustration',
        section: 'Illustration',
        external: true,
        hidden: true
    },
    {
        name: 'LotR fantart / Gollum',
        href: 'https://www.instagram.com/laguna_illustrator/p/C7r9U-NsII5/?img_index=1',
        img: 'src/assets/img/projects/lotR-thumbnail.jpg',
        client: 'Personal Project',
        category: 'Illustration',
        section: 'Illustration',
        external: true,
        hidden: true
    },
    {
        name: 'LotR fantart / Eowyn',
        href: 'https://www.instagram.com/laguna_illustrator/p/C5WlOw0LgmD/?img_index=1',
        img: 'src/assets/img/projects/lotR-eowyn-thumbnail.jpg',
        client: 'Personal Project',
        category: 'Illustration',
        section: 'Illustration',
        external: true,
        hidden: true
    },
    {
        name: 'Abubilla',
        href: 'https://www.instagram.com/laguna_illustrator/p/Cm3wzC2rATY/',
        img: 'src/assets/img/projects/abubilla-thumbnail.png',
        client: 'Personal Project',
        category: 'Illustration',
        section: 'Illustration',
        external: true,
        hidden: true
    },
];

const SelectedProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  return (
    <section id="laguna_work" className="laguna__selectedProjects">
      <ul className="laguna__Projects__list" id="laguna__Projects__list">
        {projects.map((project, index) => {
          const isHidden = project.hidden && !showAll;
          return (
            <li
              key={index}
              className={`laguna__Projects__single lagunahover-container ${
                project.hidden ? 'laguna__projects__single--hidden' : ''
              }`}
              data-img={project.img}
              section={project.section}
              style={{ display: isHidden ? 'none' : 'list-item' }}
            >
              <a
                href={project.href}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
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
            </li>
          );
        })}
      </ul>
      <ShowAll showAll={showAll} toggleShowAll={toggleShowAll} />
    </section>
  );
};

export default SelectedProjects;