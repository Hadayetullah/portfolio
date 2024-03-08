import {
  UilArrow,
  UilCheckCircle,
  UilArrowRight,
  UilTimes,
  UilBracketsCurly,
} from "@iconscout/react-unicons";
import { useState } from "react";

const Services = () => {
  const [serviceModal, setServiceModal] = useState(0);

  const handleServiceModal = (e) => {
    setServiceModal(e);
  };

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Service</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
          {/* <!--==================== SERVICES 1 ====================--> */}
          <div
            className="services__content"
            onClick={() => handleServiceModal(1)}
          >
            <div>
              <UilArrow className="services__icon" />
              <h3 className="services__title">
                Frontend <br /> Development
              </h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
              View More
              <UilArrowRight className="button__icon" />
            </span>
          </div>

          {/* <!--==================== SERVICES 1 MODAL ====================--> */}
          <div
            className={`services__modal ${
              serviceModal === 1 ? "service1__modal-active" : ""
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Frontend <br /> Development
              </h4>

              <UilTimes
                className="services__modal-close"
                onClick={() => handleServiceModal(0)}
              />

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>Create dynamic user interfaces.</p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Ensure that website or application design is responsive and
                    compatible with different devices and screen sizes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>Write clean, well-organized and efficient code.</p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Ensure that website or application functionality and design
                    align with project goals.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* <!--==================== SERVICES 2 ====================--> */}
          <div
            className="services__content"
            onClick={() => handleServiceModal(2)}
          >
            <div>
              <UilBracketsCurly className="services__icon" />
              <h3 className="services__title">
                Backend <br /> Development
              </h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
              View More
              <UilArrowRight className="button__icon" />
            </span>
          </div>

          {/* <!--==================== SERVICES 2 MODAL ====================--> */}
          <div
            className={`services__modal ${
              serviceModal === 2 ? "service2__modal-active" : ""
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Backend <br /> Development
              </h4>
              <UilTimes
                className="services__modal-close"
                onClick={() => handleServiceModal(0)}
              />

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>Create dynamic user interfaces.</p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Ensure that website or application design is responsive and
                    compatible with different devices and screen sizes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>Write clean, well-organized and efficient code.</p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Ensure that website or application functionality and design
                    align with project goals.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
