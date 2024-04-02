import { UilDownloadAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const About = ({ aboutAnimation }) => {
  return (
    <div>
      <section className="about section" id="about">
        <div
          className={`about__top ${
            aboutAnimation === false ? "about-active" : ""
          }`}
        >
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My Introduction</span>
        </div>

        <div
          className={`about__container container grid ${
            aboutAnimation === false ? "about-active" : ""
          }`}
        >
          <div className="about__content">
            <img src="/assets/img/about3.jpg" alt="" className="about__img1" />

            <div className="about__info">
              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name">
                  Years self-learning <br /> experience
                </span>
              </div>

              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>

              <div>
                <span className="about__info-title">
                  09<span className="job__experience-animate">+</span>
                </span>
                <span className="about__info-name">
                  Months job
                  <br /> experience
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <Link
                download=""
                target="_blank"
                to="assets/pdf/Hadayetullah-CV.pdf"
                className="button button--flex"
              >
                Download CV <UilDownloadAlt className="button__icon" />
              </Link>
            </div>
          </div>

          <img src="/assets/img/about3.jpg" alt="" className="about__img2" />

          <div className="about__data">
            <p className="about__description">
              I am a dedicated and passionate web developer with a strong
              foundation in frontend and backend technologies. Over the course
              of more than three years of self-learning and professional
              experience, I have acquired expertise in HTML, CSS, JavaScript,
              Python, and libraries/frameworks such as React.js, React Router,
              Redux, Django, and Django Rest Framework(DRF). While my focus has
              primarily been on creating visually appealing websites with
              seamless user experiences, I am also deeply intrigued by the
              possibilities of artificial intelligence (AI). I am eager to
              explore how AI can be integrated into web applications to enhance
              functionality, improve user interactions, and drive innovation.
              Additionally, I aspire to work on larger, more robust web
              applications such as multi-vendor websites, point-of-sale systems,
              customer relationship management tools, human resource management
              systems, and other unique applications that present complex
              challenges and opportunities for innovation. I am excited about
              the prospect of leveraging my skills and creativity to contribute
              to the development of transformative digital solutions that blend
              AI with cutting-edge web technologies.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name">
                  Years self-learning <br /> experience
                </span>
              </div>

              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>

              <div>
                <span className="about__info-title">
                  09<span className="job__experience-animate">+</span>
                </span>
                <span className="about__info-name">
                  Months job
                  <br /> experience
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <Link
                download=""
                target="_blank"
                to="assets/pdf/Hadayetullah-CV.pdf"
                className="button button--flex"
              >
                Download CV <UilDownloadAlt className="button__icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
