import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/portfolio.css";

function Portfolio({ portfolioData }) {
  console.log(portfolioData);
  return (
    <div className="portfolio-section">
      <NavBar />
      <h1 className="text-center mt-5">Portfolio</h1>
      <Container className="portfolio-container">
        {portfolioData &&
          portfolioData.map((data) => (
            <Row
              className="box justify-content-md-center mt-5 mb-5 experiance-section p-4"
              key={data.id}
            >
              <Col className="col-sm-12 col-md-6 col-lg-5">
                <h2>{data.title}</h2>
                <p>{data.role}</p>
                <p>{data.description}</p>
              </Col>
              <Col className="col-sm-12 col-md-6 col-lg-5 mb-5">
                <img
                  src={data.src}
                  alt="simple jack"
                  className="work-image"
                  onClick={() => window.open(data.site)}
                />
              </Col>
            </Row>
          ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Portfolio;
