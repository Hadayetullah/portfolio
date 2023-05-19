import { Routes, Route, useLocation } from 'react-router-dom'

import About from "./conponents/body/about/About";
import Home from "./conponents/body/home/Home";
import Header from "./conponents/header/Header";
import Skills from "./conponents/body/skills/Skills";
import Qualification from "./conponents/body/qualification/Qualification";
import Services from "./conponents/body/services/Services";
import Portfolio from "./conponents/body/portfolio/Portfolio";
import Contactme from "./conponents/body/contactme/Contactme";
import Footer from "./conponents/footer/Footer";

// import Template from './template'

import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const location = useLocation();


  // Get the initial theme from local storage or default to light theme
  function getInitialTheme() {
    const savedTheme = localStorage.getItem("selected-theme");
    return savedTheme || "light";
  }

  // Toggle the theme and update local storage
  function toggleTheme() {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("selected-theme", newTheme);
  }  

  const [activeMenu, setActiveMenu] = useState("home");
  const [scrollHeader, setScrollHeader] = useState("");
  const [theme, setTheme] = useState(getInitialTheme());


  const [aboutAnimation, setAboutAnimation] = useState(true);
  // const [activeMenu, setActiveMenu] = useState("home");
  // const [activeMenu, setActiveMenu] = useState("home");
  // const [activeMenu, setActiveMenu] = useState("home");
  // const [activeMenu, setActiveMenu] = useState("home");

  
  useEffect(()=>{

    // const {hash} = window.location;
    const { pathname } = location;
    const path = pathname.substring(1)

    if(path){
      const element = document.getElementById(path);
      if (element){
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);



  useEffect(() => {

    function scrollHeader() {
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 80) setScrollHeader("scroll-header");
        else setScrollHeader("");
    }


    
    const sections = document.getElementsByTagName("section");

    function handleScroll() {
      // window.pageYOffset and window.scrollY are same
        const scrollY = window.scrollY + 300;

        for (let i = 0; i < sections.length; i++) {
            const current = sections[i];
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                setActiveMenu(sectionId);

                if(sectionId === "about"){
                  setAboutAnimation(false);
                }
            }
        }
    }



    // Scroll
    window.addEventListener("scroll", scrollHeader);
    window.addEventListener("scroll", handleScroll);

    // Theme
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("selected-theme", theme);


    return () => {
        window.removeEventListener("scroll", scrollHeader);
        window.removeEventListener("scroll", handleScroll);
    }

}, [theme]);
  

  

  return (
      <div>
        <Header 
          theme={theme} 
          activeMenu={activeMenu} 
          scrollHeader={scrollHeader} 
          toggleTheme={toggleTheme} 
        />

        <main className="main">
          <Home />
          <About aboutAnimation={aboutAnimation} />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Contactme activeMenu={activeMenu} />
        </main>

        <Footer />
      </div>
  )
}

export default App
