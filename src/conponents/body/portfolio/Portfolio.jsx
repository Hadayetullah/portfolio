import { UilArrowRight, UilAngleLeftB, UilAngleRightB } from '@iconscout/react-unicons';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
        <section className="portfolio section" id="portfolio">
            {/* <h2 className="section__title">Portfolio</h2> */}
            <h2 className="section__title">Projects</h2>
            {/* <!-- <span className="section__subtitle">Most recent work</span> --> */}
            <span className="section__subtitle">My works</span>
            
            <Swiper 
                className="portfolio__container container"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >

                {/* <!--==================== PORTFOLIO 1====================--> */}
                <SwiperSlide className="portfolio__content grid">
                    <img src="/assets/img/portfolio3.jpg" alt="" className="portfolio__img" />
                    
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">POS Application</h3>
                        {/* <!-- <p className="portfolio__description"></p> --> */}
                        <Link target='_blank' to="https://point-of-sell.web.app/" className="button button--flex button--small portfolio__button">
                        Demo
                        <UilArrowRight className="button__icon" />
                        </Link>
                    </div>
                </SwiperSlide>

                {/* <!--==================== PORTFOLIO 1====================--> */}
                <SwiperSlide className="portfolio__content grid">
                    <img src="/assets/img/portfolio1.jpg" alt="" className="portfolio__img" />
                
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Job Portal Website</h3>
                        {/* <!-- <p className="portfolio__description"></p> --> */}
                        <Link target='_blank' to="https://jobportal-webapp.web.app/" className="button button--flex button--small portfolio__button">
                            Demo
                            <UilArrowRight className="button__icon" />
                        </Link>
                    </div>
                </SwiperSlide>

                {/* <!--==================== PORTFOLIO 2====================--> */}
                <SwiperSlide className="portfolio__content grid">
                    <img src="/assets/img/portfolio2.jpg" alt="" className="portfolio__img" />
                    
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Multi-Vendor Website</h3>
                        {/* <!-- <p className="portfolio__description"></p> --> */}
                        <Link target='_blank' to="https://multi-vendor-application-d0c64.web.app/" className="button button--flex button--small portfolio__button">
                        Demo
                        <UilArrowRight className="button__icon" />
                        </Link>
                    </div>
                </SwiperSlide>

                {/* <!--==================== PORTFOLIO 3====================--> */}
                <SwiperSlide className="portfolio__content grid">
                    <img src="/assets/img/portfolio3.jpg" alt="" className="portfolio__img" />
                    
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">School Management System</h3>
                        {/* <!-- <p className="portfolio__description"></p> --> */}
                        <Link target='_blank' to="https://hadayetullah.pythonanywhere.com/account/home/" className="button button--flex button--small portfolio__button">
                        Demo
                        <UilArrowRight className="button__icon" />
                        </Link>
                    </div>
                </SwiperSlide>

                {/* <!--==================== PORTFOLIO 4====================--> */}
                <SwiperSlide className="portfolio__content grid">
                    <img src="/assets/img/portfolio1.jpg" alt="" className="portfolio__img" />
                    
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Online Shopping System</h3>
                        {/* <!-- <p className="portfolio__description"></p> --> */}
                        <Link target='_blank' to="https://hadayetullah.github.io/JavaScript-Online-Shopping-System/" className="button button--flex button--small portfolio__button">
                        Demo
                        <UilArrowRight className="button__icon" />
                        </Link>
                    </div>
                </SwiperSlide>

                {/* <!--==================== PORTFOLIO 5====================--> */}
                <SwiperSlide className="portfolio__content grid">
                    <img src="/assets/img/portfolio2.jpg" alt="" className="portfolio__img" />
                    
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Responsive Design</h3>
                        {/* <!-- <p className="portfolio__description"></p> --> */}
                        <Link target='_blank' to="https://hadayetullah.github.io/Just-a-design-using-html-css/" className="button button--flex button--small portfolio__button">
                        Demo
                        <UilArrowRight className="button__icon" />
                        </Link>
                    </div>
                </SwiperSlide>
                

                {/* <!-- Add arrows --> */}
                {/* <div className="swiper-button-next">
                <UilAngleRightB />
                </div> */}

                {/* <div className="swiper-button-prev">
                    <UilAngleLeftB className="swiper-portfolio-icon" />
                </div> */}

                {/* <!-- Add Pagination --> */}
                {/* <div className="swiper-pagination"></div> */}
            </Swiper>
      </section>
    </div>
  )
}

export default Portfolio;
