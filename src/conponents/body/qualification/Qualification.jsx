import { UilGraduationCap, UilBriefcaseAlt } from "@iconscout/react-unicons";
import { useState } from "react";

const Qualification = () => {
  const [qualification, setQualification] = useState("education");

  const changeTabs = (e, qName) => {
    e.preventDefault();
    if (qualification != qName) {
      setQualification(qName);
    }
  };

  return (
    <div>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              onClick={(e) => changeTabs(e, "education")}
              className={`qualification__button button--flex ${
                qualification === "education" ? "qualification__active" : ""
              }`}
            >
              <UilGraduationCap className="qualification__icon" />
              Education
            </div>

            <div
              onClick={(e) => changeTabs(e, "acquired")}
              className={`qualification__button button--flex ${
                qualification === "acquired" ? "qualification__active" : ""
              }`}
            >
              <UilBriefcaseAlt className="qualification__icon" />
              Work
            </div>
          </div>

          <div className="qualification__sections">
            {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
            <div
              className={`qualification__content ${
                qualification === "education" ? "qualification__active" : ""
              }`}
              data-content
            >
              {/* <!--==================== QUALIFICATION 1 ====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">BSc in CSE</h3>
                  <span className="qualification__subtitle">
                    Southeast University
                  </span>

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    Passing Year - 2021
                  </div>

                  <div className="qualification__location">
                    <i className="uil uil-map-marker-edit"></i>
                    Dhaka, Bangladesh
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 2 ====================--> */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">HSC</h3>
                  <span className="qualification__subtitle">
                    Sirajganj Police Lines School and College
                  </span>

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    Passing Year - 2014
                  </div>

                  <div className="qualification__location">
                    <i className="uil uil-map-marker-edit"></i>
                    Sirajganj, Bangladesh
                  </div>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 3 ====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SSC</h3>
                  <span className="qualification__subtitle">
                    Alokdia Model Madrasha
                  </span>

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    Passing Year - 2012
                  </div>

                  <div className="qualification__location">
                    <i className="uil uil-map-marker-edit"></i>
                    Sirajganj, Bangladesh
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
            <div
              className={`qualification__content ${
                qualification === "acquired" ? "qualification__active" : ""
              }`}
              data-content
            >
              {/* <!--==================== QUALIFICATION 1 ====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Developer</h3>

                  <br />

                  <span className="qualification__subtitle">
                    <a target="_blank" href="https://kaizentech.agency/">
                      KaizenTech Business Development Agency
                    </a>
                  </span>

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    November 2023 - June 2024
                  </div>

                  <br />

                  <div className="qualification__location">
                    <i className="uil uil-map-marker-edit"></i>
                    Adabor, Dhaka, Bangladesh.
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 2 ====================--> */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>

                <div>
                  <h3 className="qualification__title">
                    Junior Front-end Developer (Intern)
                  </h3>

                  <br />

                  <span className="qualification__subtitle">
                    <a target="_blank" href="https://dbugstation.com/">
                      D-bug Station Limited
                    </a>
                  </span>

                  <br />

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    January 2023 - April 2023
                  </div>

                  <br />

                  <div className="qualification__location">
                    <i className="uil uil-map-marker-edit"></i>
                    Nikunja-2, Khilkhet, Dhaka, Bangladesh.
                  </div>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 3 ====================--> */}
              {/* <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">React & Redux</h3>

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div> */}

              {/* <!--==================== QUALIFICATION 4 ====================--> */}
              {/* <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    HTML, CSS & JavaScript
                  </h3>

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2020 - 2023
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualification;
