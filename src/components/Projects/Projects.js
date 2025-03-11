import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";
import wormImg from "../../assets/img/WormScheduler.png";
import musicImg from "../../assets/img/musicGenre.png";
import warImg from "../../assets/img/warGame.png";
import eventImg from "../../assets/img/eventAPI.png";
import webImg from "../../assets/img/website-img.png";
import workInProgImg from "../../assets/img/work-in-progress.png";

export const Projects = () => {
  const projects2 = [
    {
      title: "Event Management API",
      description: "API using Spring Boot",
      imgUrl: eventImg,
      link: "https://github.com/dvdkang/Event-Management-API",
    },
    {
      title: "Motivify App",
      description: "Daily Tracker App using Swift/SwiftUI",
      imgUrl: workInProgImg,
      link: "",
    },
    {
      title: "War Card Game",
      description: "Simple game using Swift/SwiftUI",
      imgUrl: warImg,
      link: "https://github.com/dvdkang/War-Card-Game",
    },
    {
      title: "Website Portfolio",
      description: "How did I make this? I used React.js and CSS",
      imgUrl: webImg,
      link: "https://github.com/dvdkang/dvdkang.github.io",
    },
  ];
  const projects3 = [
    {
      title: "Worm Scheduler",
      description: "Task Scheduling in C",
      imgUrl: wormImg,
      link: "https://github.com/dvdkang/Worm",
    },
    {
      title: "Music Genre Classification",
      description: "Machine Learning using Python and Jupyter",
      imgUrl: musicImg,
      link: "https://github.com/dvdkang/Music-Genre-Classification",
    },
  ];

  const projects1 = projects2.concat(projects3);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              A collection of projects that highlight my skills with different
              languages, programming languages, and development tools.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first"> All Projects </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Personal Projects </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Academic Projects </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey={"first"}>
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey={"second"}>
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey={"third"}>
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src="" />
    </section>
  );
};
