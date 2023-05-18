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
import { useEffect } from 'react';

function App() {

  const location = useLocation();
  
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

  

  return (
      <div>
        <Header />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Contactme />
        </main>

        <Footer />
      </div>
  )
}

export default App
