import About from "./conponents/body/about/About";
import Home from "./conponents/body/home/Home";
import Header from "./conponents/header/Header";
import Skills from "./conponents/body/skills/Skills";
import Qualification from "./conponents/body/qualification/Qualification";
import Services from "./conponents/body/services/Services";
import Portfolio from "./conponents/body/portfolio/Portfolio";
import Contactme from "./conponents/body/contactme/Contactme";
import Footer from "./conponents/footer/Footer";

const Template = () => {
  return (
    <div>
        {/* <!--==================== HEADER ====================--> */}
        <Header />
    
        {/* <!--==================== MAIN ====================--> */}
        <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <Home />
        
        {/* <!--==================== ABOUT ====================--> */}
        <About />
        
        {/* <!--==================== SKILLS ====================--> */}
        <Skills />
        
        {/* <!--==================== QUALIFICATION ====================--> */}
        <Qualification />
        
        {/* <!--==================== SERVICES ====================--> */}
        <Services />
        
        {/* <!--==================== PORTFOLIO ====================--> */}
        <Portfolio />
        
        {/* <!--==================== PROJECT IN MIND ====================--> */}
        {/* <section className="project section">
        
        </section> */}
        
        {/* <!--==================== TESTIMONIAL ====================--> */}
        {/* <section className="testimonial section">
        
        </section> */}
        
        {/* <!--==================== CONTACT ME ====================--> */}
        <Contactme />
        </main>
        
        {/* <!--==================== FOOTER ====================--> */}
        <Footer />
        
        {/* <!--==================== SCROLL UP ====================--> */}
        <a href="#home" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    </div>
  )
}

export default Template;

<Routes>
              {/* <!--==================== HOME ====================--> */}
              <Route path='/' />
              
              {/* <!--==================== ABOUT ====================--> */}
              <Route path='about' />
              
              {/* <!--==================== SKILLS ====================--> */}
              <Route path='skills' />
              
              {/* <!--==================== QUALIFICATION ====================--> */}
              <Route path='qualificatoin' />
              
              {/* <!--==================== SERVICES ====================--> */}
              <Route path='services' />
              
              {/* <!--==================== PORTFOLIO ====================--> */}
              <Route path='portfolio' />
              
              {/* <!--==================== PROJECT IN MIND ====================--> */}
              {/* <section className="project section">
              
              </section> */}
              
              {/* <!--==================== TESTIMONIAL ====================--> */}
              {/* <section className="testimonial section">
              
              </section> */}
              
              {/* <!--==================== CONTACT ME ====================--> */}
              <Route path='contactme'/>
          </Routes>
