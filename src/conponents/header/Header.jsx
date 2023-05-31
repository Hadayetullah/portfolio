
// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
    UilEstate, 
    UilApps, 
    UilUser, 
    UilFileAlt, 
    UilBriefcaseAlt, 
    UilScenery, 
    UilMessage, 
    UilTimes,
    UilMoon,
    UilSun
} from '@iconscout/react-unicons';


const Header = ({theme, activeMenu, scrollHeader, toggleTheme}) => {

    
    const showMenuItems = () =>{
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.add("show-menu");
    }

    const hideMenuItems = () =>{
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show-menu");
    }

    const selectToRemoveMenuItems = () => {
        const navMenu = document.getElementById("nav-menu");
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove("show-menu");
    }  




    // const [activeMenu, setActiveMenu] = useState('home');

    // const handleScroll = () => {
    //     const scrollPosition = window.scrollY + 200; // adjust this value to fit your layout
    //     const homeSection = document.getElementById('home');
    //     const aboutSection = document.getElementById('about');
    //     const skillsSection = document.getElementById('skills');
    //     const servicesSection = document.getElementById('services');
    //     const portfolioSection = document.getElementById('portfolio');
    //     const contactSection = document.getElementById('contactme');
        
    //     if (scrollPosition >= homeSection.offsetTop && scrollPosition < aboutSection.offsetTop) {
    //       setActiveMenu('home');
    //     } else if (scrollPosition >= aboutSection.offsetTop && scrollPosition < skillsSection.offsetTop) {
    //       setActiveMenu('about');
    //     } else if (scrollPosition >= skillsSection.offsetTop && scrollPosition < servicesSection.offsetTop) {
    //       setActiveMenu('skills');
    //     } else if (scrollPosition >= servicesSection.offsetTop && scrollPosition < portfolioSection.offsetTop) {
    //       setActiveMenu('services');
    //     } else if (scrollPosition >= portfolioSection.offsetTop && scrollPosition < contactSection.offsetTop) {
    //       setActiveMenu('portfolio');
    //     } else {
    //       setActiveMenu('contactme');
    //     }
    //   };


    //   useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
        
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);


  
        
      


    const moonTheme = <UilMoon className="change-theme" id="theme-button" onClick={toggleTheme} />
    const sunTheme = <UilSun className="change-theme" id="theme-button" onClick={toggleTheme} />


  return (
    <div>
        <header className={`header ${scrollHeader}`} id="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">Hadayetullah</NavLink>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                        <NavLink to="/" className={`nav__link ${activeMenu === 'home' ? 'active-link' : ''}`} onClick={()=>selectToRemoveMenuItems()}>
                            <UilEstate className="nav__icon" /> Home
                            {/* <i className="uil uil-estate nav__icon"></i> Home */}
                        </NavLink>
                        </li>

                        <li className="nav__item">
                        <NavLink to="/about" className={`nav__link ${activeMenu === 'about' ? 'active-link' : ''}`} onClick={()=>selectToRemoveMenuItems()}>
                            <UilUser className="nav__icon" /> About
                            {/* <i className="uil uil-user nav__icon"></i> About */}
                        </NavLink>
                        </li>

                        <li className="nav__item">
                        <NavLink to="/skills" className={`nav__link ${activeMenu === 'skills' ? 'active-link' : ''}`} onClick={()=>selectToRemoveMenuItems()}>
                            <UilFileAlt className="nav__icon" /> Skills
                            {/* <i className="uil uil-file-alt nav__icon"></i> Skills */}
                        </NavLink>
                        </li>

                        <li className="nav__item">
                        <NavLink to="/services" className={`nav__link ${activeMenu === 'services' ? 'active-link' : ''}`} onClick={()=>selectToRemoveMenuItems()}>
                            <UilBriefcaseAlt className="nav__icon" /> Services
                            {/* <i className="uil uil-briefcase-alt nav__icon"></i> Services */}
                        </NavLink>
                        </li>

                        <li className="nav__item">
                        <NavLink to="/portfolio" className={`nav__link ${activeMenu === 'portfolio' ? 'active-link' : ''}`} onClick={()=>selectToRemoveMenuItems()}>
                            <UilScenery className="nav__icon" /> Portfolio
                            {/* <i className="uil uil-scenery nav__icon"></i> Portfolio */}
                        </NavLink>
                        </li>

                        <li className="nav__item">
                        <NavLink to="/contactme" className={`nav__link ${activeMenu === 'contactme' ? 'active-link' : ''}`} onClick={()=>selectToRemoveMenuItems()}>
                            <UilMessage className="nav__icon" /> Contactme
                            {/* <i className="uil uil-message nav__icon"></i> Contactme */}
                        </NavLink>
                        </li>
                    </ul>
                    <UilTimes className="nav__close" id="nav-close" onClick={()=>hideMenuItems()} />
                    {/* <i className="uil uil-times nav__close" id="nav-close"></i> */}
                </div>

                <div className="nav__btns">
                    {theme === 'light' ? moonTheme : sunTheme}

                    <div className="nav__toggle" id="nav-toggle" onClick={()=>showMenuItems()}>
                        <UilApps />
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header;
