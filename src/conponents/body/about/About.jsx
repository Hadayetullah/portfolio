
import { UilDownloadAlt } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const About = ({aboutAnimation}) => {

  return (
    <div>
        <section className="about section" id="about">
            <div className={`about__top ${aboutAnimation === false ? "about-active" : ""}`}>
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>
            </div>

            <div className={`about__container container grid ${aboutAnimation === false ? "about-active" : ""}`}>
                <img src="/assets/img/about3.png" alt="" className="about__img" />

                <div className="about__data">
                    <p className="about__description">
                        Motivated and skilled front-end developer with more than 2 years of 
                        professional experience in designing and implementing user-friendly web 
                        interfaces. Possessing in-depth knowledge of HTML, CSS, and JavaScript, 
                        with expertise in frameworks such as Bootstrap, React, React Router, and Redux. 
                        Strong understanding of backend technologies, including Django, Django 
                        REST Framework, and MySQL.
                    </p>

                    <div className="about__info">
                    <div>
                        <span className="about__info-title">02+</span>
                        <span className="about__info-name">Years <br /> experience</span>
                    </div>

                    <div>
                        <span className="about__info-title">05+</span>
                        <span className="about__info-name">Completed <br /> project</span>
                    </div>

                    <div>
                        <span className="about__info-title">00<span className="job__experience-animate">+</span></span>
                        <span className="about__info-name">Years <br /> job experience</span>
                    </div>
                    </div>

                    <div className="about__buttons">
                        <Link download="" target='_blank' to="assets/pdf/Hadayetullah-CV.pdf" className="button button--flex">
                            Download CV <UilDownloadAlt className="button__icon" />
                        </Link>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default About;