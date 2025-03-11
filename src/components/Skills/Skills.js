import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import reactLogo from "../../assets/img/react.png";
import jsLogo from "../../assets/img/javascript.png";
import pythonLogo from "../../assets/img/python.png";
import htmlLogo from "../../assets/img/html.png";
import cppLogo from "../../assets/img/cpp.png";
import swiftLogo from "../../assets/img/swift.png";
import javaLogo from "../../assets/img/java.png";
import springbootLogo from "../../assets/img/springboot.png";
import cssLogo from "../../assets/img/css.png";
import postgresqlLogo from "../../assets/img/postgres.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Experienced in full-stack development and machine learning.
                Passionate about deepening my knowledge <br></br>in AI/ML and
                human-computer interaction (HCI).
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                slidesToSlide={5}
                className="skill-slider"
              >
                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={reactLogo} alt="react" />
                  </div>
                  <p className="p-text">React</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={pythonLogo} alt="python" />
                  </div>
                  <p className="p-text">Python</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={htmlLogo} alt="html" />
                  </div>
                  <p className="p-text">HTML</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={jsLogo} alt="javascript" />
                  </div>
                  <p className="p-text">JavaScript</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={cppLogo} alt="C++" />
                  </div>
                  <p className="p-text">C++</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={swiftLogo} alt="swift" />
                  </div>
                  <p className="p-text">Swift</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={javaLogo} alt="java" />
                  </div>
                  <p className="p-text">Java</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={springbootLogo} alt="springboot" />
                  </div>
                  <p className="p-text">Springboot</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={cssLogo} alt="css" />
                  </div>
                  <p className="p-text">css</p>
                </div>

                <div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={postgresqlLogo} alt="postgresql" />
                  </div>
                  <p className="p-text">PostgreSQL</p>
                </div>

                {/* <div className="item">
                    <img src={""} alt="skill-Image" />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="skill-Image" />
                    <h5>Backend</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="skill-Image" />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="skill-Image" />
                    <h5>Web Development</h5>
                  </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
