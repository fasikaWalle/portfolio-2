import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/about.css";
function About() {
  return (
    <>
      <NavBar />
      <div className="about-section">
        <h1>About Me</h1>
        <p>
          Front End developer with 4 years of experience developing enterprise
          web applications for diverse crime investigation bureau.Advanced
          experience in front end technologies like reactjs ,HTML the
          accompanying automated testing frameworks like jest and state
          managment library like redux. Experience in designing prototype using
          a tool like Figma have ability which is efficiently solve software
          development problems. Experienced working effectively in multicultural
          teams developing software using different SDLC methodologies such as
          Agile/SCRUM and Prototype. Detail oriented,with high ability to learn
          new technologies in a short time
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
