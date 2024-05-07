import { useState } from "react";
import {
  UilBracketsCurly,
  UilServerNetwork,
  UilAngleDown,
} from "@iconscout/react-unicons";

const Skills = () => {
  const [openSkill, setOpenSkill] = useState("frontend");

  const toggleSkills = (e, skillName) => {
    e.preventDefault();
    if (openSkill === skillName) {
      setOpenSkill(null);
    } else {
      setOpenSkill(skillName);
    }
  };

  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <div>
            {/* <!--==================== SKILLS 1====================--> */}
            <div
              className={`skills__content ${
                openSkill === "frontend" ? "skills__open" : "skills__close"
              }`}
            >
              <div
                className="skills__header"
                onClick={(e) => toggleSkills(e, "frontend")}
              >
                <UilBracketsCurly className="skills__icon" />

                <div>
                  <h1 className="skills__title">Frontend developer</h1>
                  <span className="skills__subtitle">More than 1.5 years</span>
                </div>

                <UilAngleDown className="skills__arrow" />
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__number">95%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">HTML5</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html5"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__css"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">CSS3</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__css3"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Tailwind CSS</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__tailwind"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">React Js</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">React Router</h3>
                    <span className="skills__number">95%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__rr"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Redux</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__redux"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Next Js</h3>
                    <span className="skills__number">50%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__next"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Responsiveness</h3>
                    <span className="skills__number">99%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__responsiveness"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Browser Compatibility</h3>
                    <span className="skills__number">95%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__browsercompatible"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <!--==================== SKILLS 2====================--> */}
            <div
              className={`skills__content ${
                openSkill === "backend" ? "skills__open" : "skills__close"
              }`}
            >
              <div
                className="skills__header"
                onClick={(e) => toggleSkills(e, "backend")}
              >
                <UilServerNetwork className="skills__icon" />

                <div>
                  <h1 className="skills__title">Backend developer</h1>
                  <span className="skills__subtitle">More than 1 years</span>
                </div>

                <UilAngleDown className="skills__arrow" />
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__python"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Django</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__django"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Django Rest Framework(DRF)</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__drf"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">JSON Web Token(JWT)</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__jwt"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">SQLite</h3>
                    <span className="skills__number">50%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__sqllite"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__number">75%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__mysql"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
