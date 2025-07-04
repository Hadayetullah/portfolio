// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

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
          {/* <!--==================== PROJECT 1====================--> */}
          {/* <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio2.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Medicine Management</h3>
              <Link
                target="_blank"
                to="http://13.51.238.172/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide> */}

          {/* <!--==================== PROJECT 1====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Single Page Portfolio</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://hadayetullah-portfolio.vercel.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio2.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">POS Application</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://simple-pos-application.vercel.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio3.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Multi-Vendor Website</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://service-point-rust.vercel.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!--==================== PROJECT 2====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Weather App</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://daily-weather-blond-five.vercel.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!--==================== PROJECT 3====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                Simple Website
              </h3>
              <Link
                target="_blank"
                to="https://cybercraft-bangladesh.vercel.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio2.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                Medicine Store Management App
              </h3>
              <Link
                target="_blank"
                to="https://manage-medicine.web.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide> */}

          {/* <!--==================== PROJECT 4====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                Task Management App
              </h3>
              <Link
                target="_blank"
                to="https://seo-page1-practical-test.vercel.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide>


          {/* <!--==================== PROJECT 5====================--> */}
          {/* <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                Email and JWT Session Validation
              </h3>
              <Link
                target="_blank"
                to="https://amicoding-parina.web.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide> */}

          {/* <!--==================== PROJECT 6====================--> */}
          

          {/* <!--==================== PROJECT 7====================--> */}
          {/* <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio3.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">School Management System</h3>
              <p className="portfolio__description"></p>
              <Link
                target="_blank"
                to="https://hadayetullah.pythonanywhere.com/account/home/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide> */}

          {/* <!--==================== PROJECT 8====================--> */}
          {/* <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Online Shopping System</h3>
              <p className="portfolio__description"></p>
              <Link
                target="_blank"
                to="https://hadayetullah.github.io/JavaScript-Online-Shopping-System/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide> */}

          {/* <!--==================== PROJECT 9====================--> */}
          {/* <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio2.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">A Custom Design</h3>
              <p className="portfolio__description"></p>
              <Link
                target="_blank"
                to="https://hadayetullah.github.io/Just-a-design-using-html-css/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
              </Link>
            </div>
          </SwiperSlide> */}

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
  );
};

export default Portfolio;
