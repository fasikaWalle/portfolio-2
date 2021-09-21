import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/resume.css";
import resume from "../assets/FasikaWallenewResume.docx";

import { BsCheck } from "react-icons/bs";
function Resume() {
  return (
    <div className="resume-wrapper">
      <NavBar />
      <h1 className="text-center mt-5">Resume</h1>
      <Container className="resume-container">
        <Row className="box justify-content-md-center mt-5 mb-4 experiance-section p-4">
          <Col className="col-sm-12 col-md-6  col-lg-5">
            <h2 className="mb-4">Experiance</h2>
            <div className="mt-4">
              <p>Aug 2015 - Dec 2015</p>
              <p>React/Ui Developer</p>
              <p>Yo's Technology Addis Ababa,Ethiopia</p>
            </div>
          </Col>
          <Col className="col-sm-12 col-md-6  col-lg-5">
            <h4 className="mt-4"> Hotel management system </h4>
            Designed and developed user-friendly UI using React in order to
            develop Managing restaurant menu which have a features that room
            reservation, storing and manipulating hotels staff information.
            <h4>Technologies Used:</h4>
            React/React Hook,Redux,Material ui, Rest API, Axios, node js, HTML
            5, and CSS3.
            <h4>Tools Used:</h4>
            Visual studio, React Devtools,graphql,MongoDb Compass(For Mongodb)
            Redux Devtools,Github.
          </Col>
        </Row>
        <Row className="box p-2 justify-content-md-center">
          <Col className="col-sm-12 col-md-6  col-lg-5">
            <div ClassName="mt-3">
              <p> Dec 2015 - Dec 2019</p>
              <p>frontend Developer</p>
              <p>
                Federal Police Crime Investigation Bureau Addis Ababa,Ethiopia
              </p>
            </div>
          </Col>
          <Col className=" col-sm-12 col-md-6 col-lg-5 list-unstyled">
            <p>
              <h3>Crime Record and Investigation Management System</h3>
              <h4>Job description</h4>
              <li>
                <BsCheck className="check-mark" />
                Build reusable code and libraries for future use Ensure the
                technical feasibility of UI/UX designs
              </li>
              <li>
                <BsCheck className="check-mark" />
                Optimize application for maximum speed and scalability
              </li>
              <li>
                Performed unit testing and documentation of UI and services.
                <li>
                  {" "}
                  <BsCheck className="check-mark" />
                  identifying critical bugs.
                </li>
              </li>
              <h4>Technologies Used:</h4>
              ES6, React js, Redux,Bootstrap, Rest API, Axios, node js, HTML 5,
              and CSS3.
              <h4>Tools Used:</h4>
              -Visual,studio,graphql,Github,Sonar(codequality
              analysis),webpack,postman,drawio( for
              documentation),Swagger,Jira,Selenium.
            </p>

            <p>
              <h3>Prisoners record management system </h3>
              <h4>Job description</h4>
              <ul className="list-unstyled">
                <li>
                  <BsCheck className="check-mark" />
                  Translated design team's UX design's and mock-ups into
                  responsive, interactive features using reusable components.
                </li>
                <li>
                  <BsCheck className="check-mark" />
                  Advises on front-end web application architecture solutions
                  that are reusable and user-oriented.
                </li>
                <li>
                  <BsCheck className="check-mark" />
                  Gathered data from API/web services via AJAX-JSON calls and
                  updating the DOM within the result sets.
                </li>
                <li>
                  <BsCheck className="check-mark" />
                  Creating cross-browser compatible and standards-compliant CSS
                  based page layouts.{" "}
                </li>
                <li>
                  Responsive Web Design (RWD) and CSS media Queries and
                  Bootstrap.
                </li>
                <li>
                  <BsCheck className="check-mark" />
                  Used React.js library functions for the logical implementation
                  part on the client-side for all the applications.
                </li>
                <li>
                  <BsCheck className="check-mark" />
                  Performed unit testing and documentation of UI and services.
                  identifying critical bugs.
                </li>
              </ul>
              <h4>Technologies Used:</h4>
              <div>
                ES6, React/React Hook, Redux,Bootstrap, graphql, node js, HTML
                5, and CSS3.
              </div>
              <h4>Tools Used:</h4>
              Visual studio, graphql,Redux Devtools, Github,webpack,drawio(for
              documentation),postman , Sonar(code quality
              analysis),Swagger,Jira,Selenium.
            </p>
          </Col>
        </Row>
        <Row className="box mt-5 p-2 justify-content-md-center">
          <Col className="col-sm-12 col-md-6  col-lg-5">
            <h2 className="mb-4">Education</h2>
            <h3>2021</h3>
            <div>University of Texas (UT)</div>
            <div>Full-Stack Web Developer – UT Coding Bootcamp</div>
            <div>Austin Texas</div>
          </Col>
          <Col className=" col-sm-12 col-md-6 col-lg-5">
            <p>
              A 24-week intensive program focused on gaining technical
              programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap,
              graphQL, Node Js, MySQL, MongoDB, Express, Handelbars.js &
              ReactJS.
            </p>
          </Col>
        </Row>
        <Row className="box p-2 justify-content-md-center mb-5">
          <Col className="col-sm-12 col-md-6  col-lg-5">
            <h3>2011</h3>
            <div>Dire Dawa University</div>
            <div>Computer Science</div>
            <div>Dire Dawa,Ethiopia</div>
          </Col>
          <Col className="col-sm-12 col-md-6  col-lg-5">
            <h3>Final project</h3>
            Graduation paper Evaluation system: The system was developed for the
            University facility and services. A web-based application that takes
            a graduation paper of lecturers and rank based on the criteria , and
            announce the result via text message Technologies Used: HTML5, CSS3,
            Javascript, SQL,Bootstrap, Tools Microsoft Visual Studio 2010.
          </Col>
        </Row>
        <Row className="box p-2 justify-content-md-center mb-5">
          <Col className="col-sm-12 col-md-6  col-lg-5 mb-5">
            <h3>Professional skillset</h3>
            <p>JavaScript/ES6/React/Angular/HTML/CSS/</p>
            <p>Node.js/Rest,Jest</p>
            <p>MongoDB/GraphQL/Express</p>
            <p>Bootstrap/Ant design/Chakra/Bulma</p>

            <a
              className=" mt-2 download-resume p-2 text-center text-decoration-none text-dark"
              href={resume}
              title=" If you want to see additional information please download the
              resume!!"
              download="resume"
            >
              download
            </a>
          </Col>
          <Col className="col-sm-12 col-md-6 col-lg-5 mt-5"> </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Resume;
