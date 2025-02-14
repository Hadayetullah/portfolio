import { useEffect, useState } from "react";
import {
  UilBracketsCurly,
  UilServerNetwork,
  UilAngleDown,
  UilChannel,
} from "@iconscout/react-unicons";

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const Skills = () => {
  const [openSkill, setOpenSkill] = useState("frontend");
  const [otherSkill, setOtherSkill] = useState("others2-open");
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  const debouncedResize = debounce(handleResize, 300);

  const toggleSkills = (skillName, anotherSkill) => {
    // e.preventDefault();
    if (openSkill === skillName) {
      setOpenSkill(null);
      if (windowSize.width <= 567) {
        setOtherSkill("others2-open");
      } else {
        setOtherSkill(anotherSkill);
      }
    } else {
      setOpenSkill(skillName);
      if (windowSize.width <= 567) {
        setOtherSkill("others2-open");
      } else {
        setOtherSkill(anotherSkill);
      }
    }
  };

  useEffect(() => {
    if (windowSize.width <= 567) {
      toggleSkills(openSkill, "others2-open");
    }
    // Attach the debounced handler to the window resize event
    window.addEventListener("resize", debouncedResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [debouncedResize, windowSize.width]);

  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              {/* <!--==================== SKILLS 1====================--> */}
              <div
                className={`skills__content ${
                  openSkill === "frontend" ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={(e) => toggleSkills("frontend", "others2-open")}
                >
                  <UilBracketsCurly className="skills__icon" />

                  <div>
                    <h1 className="skills__title">Frontend developer</h1>
                    <span className="skills__subtitle">More than 1 year</span>
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
                      <span className="skills__number">95%</span>
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
                      <span className="skills__number">95%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__tailwind"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">TypeScript (Learning)</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__typescript"></span>
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
                      <h3 className="skills__name">Next Js (Learning)</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__next"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Web Sockets</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__websocket"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Axios</h3>
                      <span className="skills__number">95%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__axios"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Fetch</h3>
                      <span className="skills__number">95%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__fetch"></span>
                    </div>
                  </div>

                  {/* <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Ajax</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__ajax"></span>
                    </div>
                  </div> */}

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
                      <span className="skills__number">99%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__browsercompatible"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: `${
                  otherSkill === "others1-open" ? "initial" : "none"
                }`,
              }}
            >
              {/* <!--==================== SKILLS 3.1====================--> */}
              <div
                className={`skills__content ${
                  openSkill === "others1" ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={(e) => toggleSkills("others1", "others1-open")}
                >
                  <UilChannel className="skills__icon" />

                  <div>
                    <h1 className="skills__title">Others</h1>
                    <span className="skills__subtitle">More than 1 year</span>
                  </div>

                  <UilAngleDown className="skills__arrow" />
                </div>

                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Git</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__git"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">GitHub</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__github"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Docker(Learning)</h3>
                      <span className="skills__number">20%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__docker"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">
                        AWS EC2 Instance(Learning)
                      </h3>
                      <span className="skills__number">0%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__ec2"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">AWS RDS(Learning)</h3>
                      <span className="skills__number">1%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__rds"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">AWS S3 Bucket(Learning)</h3>
                      <span className="skills__number">1%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__s3"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              {/* <!--==================== SKILLS 2====================--> */}
              <div
                className={`skills__content ${
                  openSkill === "backend" ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={(e) => toggleSkills("backend", "others1-open")}
                >
                  <UilServerNetwork className="skills__icon" />

                  <div>
                    <h1 className="skills__title">Backend developer</h1>
                    <span className="skills__subtitle">More than 1 year</span>
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
                      <h3 className="skills__name">
                        Django Rest Framework(DRF)
                      </h3>
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
                      <h3 className="skills__name">
                        Django Channels(Learning)
                      </h3>
                      <span className="skills__number">50%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__channels"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">SQLite</h3>
                      <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__sqllite"></span>
                    </div>
                  </div>

                  {/* <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">MySQL</h3>
                      <span className="skills__number">50%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__mysql"></span>
                    </div>
                  </div> */}

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">PostgreSQL(Learning)</h3>
                      <span className="skills__number">50%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__postgresql"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: `${
                  otherSkill === "others2-open" ? "initial" : "none"
                }`,
              }}
            >
              {/* <!--==================== SKILLS 3.2====================--> */}
              <div
                className={`skills__content ${
                  openSkill === "others2" ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={(e) => toggleSkills("others2", "others2-open")}
                >
                  <UilChannel className="skills__icon" />

                  <div>
                    <h1 className="skills__title">Others</h1>
                    <span className="skills__subtitle">More than 1 year</span>
                  </div>

                  <UilAngleDown className="skills__arrow" />
                </div>

                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Git</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__git"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">GitHub</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__github"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Docker(Learning)</h3>
                      <span className="skills__number">20%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__docker"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">
                        AWS EC2 Instance(Learning)
                      </h3>
                      <span className="skills__number">0%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__ec2"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">AWS RDS(Learning)</h3>
                      <span className="skills__number">1%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__rds"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">AWS S3 Bucket(Learning)</h3>
                      <span className="skills__number">1%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__s3"></span>
                    </div>
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
