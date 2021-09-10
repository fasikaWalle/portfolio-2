import React from "react";
import "../styles/home.css";
import Nav from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/images/fasika.jpg";

function Home() {
  return (
    <div className="flex-box">
      <div className="d-flex flex-column">
        <Nav visibility="false" />
        <Container className=" profile-section">
          <Row>
            <Col className="col-sm-12 col-md-5 col-lg-6 mb-4">
              <h1 className="header-text">
                <span> Hello, I'm Fasika Walle</span> I am a Front End Developer
              </h1>
            </Col>
            <Col className="col-sm-12 col-md-7 col-lg-6 mb-4">
              <img src={logo} alt="profile pic" className="profile-picture" />
              <div className="square"></div>
            </Col>
          </Row>
        </Container>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
