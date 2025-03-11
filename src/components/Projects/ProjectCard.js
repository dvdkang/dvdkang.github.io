import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div
        className="proj-imgbox"
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        style={{ cursor: "pointer" }}
      >
        <img src={imgUrl} alt="" />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
