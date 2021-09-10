import React from "react";

import { AiFillGithub, AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";
import "../styles/footer.css";
function Footer() {
  return (
    <div className="footer p-3">
      <AiFillGithub
        className="icons git"
        onClick={() => window.open("https://github.com/fasikaWalle/")}
      />

      <AiTwotoneMail
        className="icons mail"
        onClick={() => window.open("mailto:fasikawalle8@gmail.com")}
      />

      <AiFillLinkedin
        className="icons linkdin"
        onClick={() =>
          window.open("https://www.linkedin.com/in/fasika-walle-701bb1143/")
        }
      />
    </div>
  );
}

export default Footer;
