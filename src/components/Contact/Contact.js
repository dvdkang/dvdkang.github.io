import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import contactImg from "../../assets/img/contact-img5.png";
import Swal from "sweetalert2";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText] = useState("Send");
  const [Result, setResult] = useState("");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    if (!formDetails.name || !formDetails.email || !formDetails.message) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all required fields (Name, Email, and Message).",
        icon: "error",
      });
      return; // Stop form submission
    }

    const formData = new FormData(event.target);

    formData.append("access_key", "752de083-a9e0-49ac-aaaa-ec03a2ecd11a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message was sent successfully!",
        icon: "success",
      });

      setFormDetails(formInitialDetails); // Clear the input fields
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact me" />
          </Col>
          <Col md={6}>
            <h2>Let's Connect!</h2>
            <form onSubmit={onSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="name"
                    value={formDetails.name}
                    placeholder="Name"
                    onChange={(e) => onFormUpdate("name", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    name="message"
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
