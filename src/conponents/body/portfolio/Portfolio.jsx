import {
  UilArrowRight,
  UilAngleLeftB,
  UilAngleRightB,
} from "@iconscout/react-unicons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
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
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio3.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">POS Application</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://point-of-sell.web.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
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
                to="https://weather-dhaka.web.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </Link>
            </div>
          </SwiperSlide>

          {/* <!--==================== PROJECT 3====================--> */}
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
                <UilArrowRight className="button__icon" />
              </Link>
            </div>
          </SwiperSlide> */}

          {/* <!--==================== PROJECT 4====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio3.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Job Portal Website</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://jobportal-webapp.web.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </Link>
            </div>
          </SwiperSlide>

          {/* <!--==================== PROJECT 5====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                Email and JWT Session Validation
              </h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://amicoding-parina.web.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </Link>
            </div>
          </SwiperSlide>

          {/* <!--==================== PROJECT 6====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio2.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Multi-Vendor Website</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://multi-vendor-application-d0c64.web.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </Link>
            </div>
          </SwiperSlide>

          {/* <!--==================== PROJECT 7====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio3.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">School Management System</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://hadayetullah.pythonanywhere.com/account/home/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </Link>
            </div>
          </SwiperSlide>

          {/* <!--==================== PROJECT 8====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Online Shopping System</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://hadayetullah.github.io/JavaScript-Online-Shopping-System/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </Link>
            </div>
          </SwiperSlide>

          {/* <!--==================== PROJECT 9====================--> */}
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/assets/img/portfolio2.jpg"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">A Custom Design</h3>
              {/* <!-- <p className="portfolio__description"></p> --> */}
              <Link
                target="_blank"
                to="https://hadayetullah.github.io/Just-a-design-using-html-css/"
                className="button button--flex button--small portfolio__button"
              >
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
  );
};

export default Portfolio;
