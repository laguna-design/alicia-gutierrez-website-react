import CloseBtn from '../buttons/Close'
import TitlesLines from '../th/TitlesLines'

const OverlayHi = () => {
  return (
    <div
      id="laguna__overlay_design_BG"
      className="laguna__overlay_BG"
      data-overlay="hi"
    >
      <div
        id="laguna__overlay_hi"
        className="laguna__overlay laguna__overlay_hi"
      >
        <section className="laguna__Projects">
          <div className="laguna__lines_ver">
            <div className="laguna__bigTitle">
              <h3>Hi! I´m Alicia</h3>
              <CloseBtn />
            </div>
            <TitlesLines />
          </div>

          <div className="laguna--hi">
            <article className="laguna--hi__img">
              <img
                src="src/assets/img/ali.gif"
                alt="Alicia"
                style={{ maxWidth: '100%' }}
              />
            </article>

            <article className="laguna--hi__txt">
              <p>
                Hi! I´m Alicia Gutiérrez, <b>creative designer and art director</b> with +10 years of experience creating memorable images.
              </p>
              <p>
                Specialized in UX/UI for digital products, I’ve worked with global clients through agencies, studios, and independently.
              </p>
              <p>
                I apply user-centered design principles, with experience in UX research, wireframing, prototyping, visual design, and design systems.
                I also develop visual identities and branding for startups and established companies.
              </p>
              <p>
                Proficient in tools like Figma, Adobe Creative Suite, and Jira. I integrate well with agile and multidisciplinary teams.
              </p>

              <h6>Contact me</h6>

              <ul className="laguna--hi__contact">
                <li>
                  <a
                    className="lagunahover-container"
                    href="mailto:aliciagutierrezdesign@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mailme!
                  </a>
                </li>
                <li>/</li>
                <li>
                  <a
                    className="lagunahover-container"
                    href="https://www.linkedin.com/in/alicia-gutierrez-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li>/</li>
                <li>
                  <a
                    className="lagunahover-container"
                    href="https://www.behance.net/alicia-gutierrez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Behance
                  </a>
                </li>
                <li>/</li>
                <li>
                  <a
                    className="lagunahover-container"
                    href="https://www.instagram.com/laguna_illustrator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OverlayHi;