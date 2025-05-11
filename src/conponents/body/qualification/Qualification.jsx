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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="qualification__icon"><path d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"></path></svg>
              Education
            </div>

            <div
              onClick={(e) => changeTabs(e, "acquired")}
              className={`qualification__button button--flex ${
                qualification === "acquired" ? "qualification__active" : ""
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="qualification__icon"><path d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.27,21.27,0,0,0,3,.94v.59a1,1,0,0,0,2,0v-.21a23,23,0,0,0,3,.21,23,23,0,0,0,3-.21v.21a1,1,0,0,0,2,0v-.59A21.27,21.27,0,0,0,20,13Zm0-7.69a20.39,20.39,0,0,1-3,1V11.5a1,1,0,0,0-2,0v.74a20.11,20.11,0,0,1-6,0V11.5a1,1,0,0,0-2,0v.33a20.39,20.39,0,0,1-3-1V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"></path></svg>
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
                    {/* <a target="_blank" href="https://kaizentech.agency/">
                      KaizenTech Business Development Agency
                    </a> */}
                    <a target="_blank" href="#">
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
