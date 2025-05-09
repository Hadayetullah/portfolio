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
                <span className="about__info-title">07+</span>
                <span className="about__info-name">
                  Years <br /> self-learning experience
                </span>
              </div>

              <div>
                <span className="about__info-title">25+</span>
                <span className="about__info-name">
                  Completed <br /> self-practiced projects
                </span>
              </div>

              <div>
                <span className="about__info-title">
                  1<span className="job__experience-animate">+</span>
                </span>
                <span className="about__info-name">
                  Year job
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
                Download CV <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"></path></svg>
              </Link>
            </div>
          </div>

          <img src="/assets/img/about3.jpg" alt="" className="about__img2" />

          <div className="about__data">
            <p className="about__description">
            I am a dedicated and passionate web developer with a strong foundation in both frontend and 
            backend technologies. My primary focus has been on frontend development, where I craft 
            responsive, accessible, and interactive user interfaces. With over seven years of self-learning 
            and more than one year of professional experience, I have developed a deep understanding of modern 
            web development practices. My technical expertise includes HTML, CSS, JavaScript, TypeScript, 
            WebSockets, and Python, along with frameworks and libraries such as Tailwind CSS, React, 
            Next.js, Redux, Django, Django REST Framework (DRF), JSON Web Token (JWT), and Django Channels. 
            I specialize in building performant frontend applications, integrating backend APIs, implementing 
            real-time features, and ensuring smooth user experiences. I’m committed to continuous learning and 
            writing clean, maintainable code that brings ideas to life on the web.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">07+</span>
                <span className="about__info-name">
                  Years <br /> self-learning experience
                </span>
              </div>

              <div>
                <span className="about__info-title">25+</span>
                <span className="about__info-name">
                  Completed <br /> self-practiced projects
                </span>
              </div>

              <div>
                <span className="about__info-title">
                  1<span className="job__experience-animate">+</span>
                </span>
                <span className="about__info-name">
                  Year job
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
                Download CV <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
