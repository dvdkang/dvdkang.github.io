import { Row, Container } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import "./Experience.css";

export const Experience = () => {
  const experiences = [
    {
      icon: "bi bi-briefcase",
      year: "May 2023 - August 2023",
      title: "Allstate Insurance: Software Engineer Intern",
      description:
        "Collaborated with upper-level employees in optimizing initial model setup by integrating existing systems with Kubernetes for future scalability. Integrated Verta, using Python and PyTorch framework, to existing machine learning models to improve monitoring, managing, and deploying said models.",
    },
    {
      icon: "bi bi-briefcase",
      year: "February 2023 - May 2024",
      title: "Grinnell College: Teaching Assistant",
      description:
        "Provided critical feedback on code readability, consistency, and output based on expected outcomes and fundamental coding practices. Graded labs and assisted projects for Imperative Problem Solving, OS/Parallel Algorithms and Analysis of Algorithms course.",
    },
    {
      icon: "bi bi-mortarboard",
      year: "August 2020 - May 2024",
      title: "Grinnell College",
      description: "Bachelor's Degree in Computer Science.",
    },
  ];
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Row className="timeline">
            <h2>Experience</h2>
            {experiences.map((experience, index) => {
              return <ExperienceCard key={index} {...experience} />;
            })}
          </Row>
        </Row>
      </Container>
    </section>
  );
};
