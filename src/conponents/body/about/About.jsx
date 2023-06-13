
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
                        I am a dedicated and passionate web developer with a strong 
                        foundation in frontend and backend technologies. Over the course of 
                        three years of self-learning experience, I have acquired expertise 
                        in HTML, CSS, JavaScript, Python, and frameworks such as React.js 
                        and Django. My focus is on creating visually appealing websites with 
                        seamless user experiences, always keeping user-centric design 
                        principles at the forefront of my work.
                    </p>

                    <div className="about__info">
                    <div>
                        <span className="about__info-title">03+</span>
                        <span className="about__info-name">Years self-learning <br /> experience</span>
                    </div>

                    <div>
                        <span className="about__info-title">05+</span>
                        <span className="about__info-name">Completed <br /> project</span>
                    </div>

                    <div>
                        <span className="about__info-title">00<span className="job__experience-animate">+</span></span>
                        <span className="about__info-name">Years job<br /> experience</span>
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