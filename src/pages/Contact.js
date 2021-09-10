import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import "../styles/contact.css";
import emailjs from "emailjs-com";
function Contact() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    subject: "",
    message: "",
    success: false,
  });
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    if (userInfo.email && userInfo.message && userInfo.subject) {
      emailjs
        .sendForm(
          "gmail",
          "template_673afne",
          e.target,
          "user_QCBGmRuv0EBQHXpUwrKLB"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setUserInfo({ ...userInfo, success: true });
      setTimeout(() => {
        setUserInfo({ email: "", subject: "", message: "", success: false });
      }, 3000);
    }
  };
  return (
    <div>
      <NavBar />
      <Row className="justify-content-center">
        <Col className="col-sm-12 col-md-8 col-lg-6 ">
          <h1 className="text-center mb-5 mt-5 ">Contact Me</h1>
          {userInfo.success && (
            <Alert variant="success" className="p-1 text-center">
              <h5>succesfull!!</h5>
            </Alert>
          )}
          <Form className="contact-form" onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-input p-2"
                name="email"
                required
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                className="form-input p-2"
                name="subject"
                required
                value={userInfo.subject}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, subject: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <textarea
                className="form-control"
                type="text"
                name="message"
                placeholder="Write message..."
                rows="3"
                required
                value={userInfo.message}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, message: e.target.value })
                }
              ></textarea>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="btn-submit mt-3 p-2 w-100"
            >
              Send
            </Button>
          </Form>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Contact;
