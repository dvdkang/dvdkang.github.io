import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../../assets/img/my-logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import navIcon4 from "../../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dvdkang/">
                <img src={navIcon1} alt="LinkedIn Profile Icon" />
              </a>
              <a href="https://www.instagram.com/davidkanga/">
                <img src={navIcon3} alt="Instagram Profile Icon" />
              </a>
              <a href="https://github.com/dvdkang">
                <img src={navIcon4} alt="Github Profile Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
