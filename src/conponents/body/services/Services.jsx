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

  const arrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="button__icon"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
  )

  const cancelIconSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleServiceModal(0)} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="services__modal-close"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
  )

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Service</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
          {/* <!--==================== SERVICES 1 ====================--> */}
          <div className="services__content">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="services__icon"><path d="M9.71,6.29a1,1,0,0,0-1.42,0l-5,5a1,1,0,0,0,0,1.42l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,12l4.3-4.29A1,1,0,0,0,9.71,6.29Zm11,5-5-5a1,1,0,0,0-1.42,1.42L18.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5A1,1,0,0,0,20.71,11.29Z"></path></svg>
              <h3 className="services__title">
                Frontend <br /> Development
              </h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => handleServiceModal(1)}
            >
              View More
              {arrowSvg}
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

              {cancelIconSvg}

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Develop dynamic web interfaces using HTML, CSS, JavaScript,
                    React.js, React Router, and Redux, tailored to the specific
                    requirements.
                  </p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Ensure that website or application design is responsive,
                    mobile-friendly and compatible with different devices and
                    screen sizes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>Write clean, well-organized and efficient code.</p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Integrate with backend APIs using asynchronous JavaScript
                    techniques using Fetch API / Axios to fetch and manipulate
                    data from server endpoints.
                  </p>
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
          <div className="services__content">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="services__icon"><path d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"></path></svg>
              <h3 className="services__title">
                Backend <br /> Development
              </h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => handleServiceModal(2)}
            >
              View More
              {arrowSvg}
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
              {cancelIconSvg}

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Develop custom web applications tailored to the specific
                    needs and requirements.
                  </p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Implement secure user authentication and authorization using
                    JWT to ensure that only authorized users can access the
                    application's resources.
                  </p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Build RESTful APIs using Django Rest Framework to expose
                    functionalities and data to external systems or frontend
                    applications.
                  </p>
                </li>

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Design and integrate databases using Django's ORM
                    (Object-Relational Mapping) to efficiently store and
                    retrieve data.
                  </p>
                </li>

                {/* <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Implement additional security measures such as CSRF
                    (Cross-Site Request Forgery) protection, HTTPS usage, and
                    input validation to enhance the security posture of the
                    application.
                  </p>
                </li> */}

                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Optimize the application for scalability and performance by
                    implementing caching mechanisms, database indexing, and
                    other performance tuning techniques.
                  </p>
                </li>

                {/* <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Deploy the web application to a production environment and
                    provide guidance on selecting a suitable hosting platform,
                    such as AWS, Heroku, or DigitalOcean.
                  </p>
                </li> */}

                {/* <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Offer ongoing maintenance and support services to ensure
                    that the application remains operational, secure, and
                    up-to-date with the latest technologies and security
                    patches.
                  </p>
                </li> */}

                {/* <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Provide comprehensive documentation for the web
                    application's APIs and functionalities, as well as training
                    sessions for the customer's team on how to use and maintain
                    the application.
                  </p>
                </li> */}

                {/* <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>
                    Offer consultation and advice on best practices, technology
                    choices, and architectural decisions to help the customer
                    achieve their business goals effectively.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
