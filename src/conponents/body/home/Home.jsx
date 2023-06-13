
import { UilLinkedinAlt, UilGithubAlt, UilFacebookF, UilMessage, UilMouseAlt, UilArrowDown } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

import AutoTyping from '../../specialComponents/AutoTyping';

const Home = () => {
    // let a = document.querySelector(".home__subtitle");
    // console.log(a.clientHeight)
  return (
    <div>
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                    <a href="https://www.linkedin.com/in/md-hadayetullah-964672150/" className="home__social-icon" target="_blank">
                        <UilLinkedinAlt />
                    </a>
                    
                    <a href="https://github.com/Hadayetullah" className="home__social-icon" target="_blank">
                        <UilGithubAlt />
                    </a>
                    
                    <a href="https://www.facebook.com/hadayet00/" className="home__social-icon" target="_blank">
                        <UilFacebookF />
                    </a>
                    </div>

                    <div className="home__img">
                    <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                        </mask>
                        <g mask="url(#mask0)">
                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                        <image className="home__blob-img" x="6" y="-13" href="assets/img/hadayetullah.png" />
                        </g>
                    </svg>
                    </div>

                    <div className="home__data">
                    <h1 className="home__title">Hi, I'am Hadayetullah</h1>
                    <AutoTyping text={"Web Developer"} />
                    {/* <h3 className="home__subtitle">Frontend Developer</h3> */}
                    <p className="home__description">
                        High level experience in web design and development knowledge, producing quality work.
                    </p>
                    <Link to="/contactme" className="button button--flex">
                        Contact Me <UilMessage className="button__icon" />
                    </Link>
                    </div>
                </div>

                <div className="home__scroll">
                    <Link to="/about" className="home__scroll-button button--flex">
                        <UilMouseAlt className="home__scroll-mouse" />
                        <span className="home__scroll-name">Scroll Down</span>
                        <UilArrowDown className="home__scroll-arrow" />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home;