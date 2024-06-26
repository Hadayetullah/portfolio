import { Link } from 'react-router-dom';
import { UilFacebookF, UilLinkedinAlt, UilGithubAlt, UilArrowUp} from '@iconscout/react-unicons';


const Footer = () => {

    function scrollUp() {
        const scrollUp = document.getElementById("scroll-up");
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    }
    
    window.addEventListener("scroll", scrollUp);

  return (
    <div>
        <footer className="footer">
        <div className="footer__bg">
            <div className="footer__container container grid">
            <div>
                <h1 className="footer__title">Hadayetullah</h1>
                <span className="footer__subtitle">Web developer</span>
            </div>

            <ul className="footer__links">
                <li>
                <Link to="/services" className="footer__link">Services</Link>
                </li>
                <li>
                <Link to="/portfolio" className="footer__link">Portfolio</Link>
                </li>
                <li>
                <Link to="/contactme" className="footer__link">Contactme</Link>
                </li>
            </ul>

            <div className="footer__socials">
                <Link target="_blank" to="https://www.facebook.com/hadayet00/" className="footer__social">
                    <UilFacebookF />
                </Link>

                <Link to="https://www.linkedin.com/in/md-hadayetullah-964672150/" target="_blank" className="footer__social">
                    <UilLinkedinAlt />
                </Link>

                <Link to="https://github.com/Hadayetullah" target="_blank" className="footer__social">
                    <UilGithubAlt />
                </Link>
            </div>

            </div>
            <p className="footer__copy">&#169; Hadayetullah. All right reserved</p>
        </div>
        </footer>

        <Link to="/" className="scrollup" id="scroll-up">
            <UilArrowUp className="scrollup__icon" />
        </Link>
    </div>
  )
}

export default Footer;
