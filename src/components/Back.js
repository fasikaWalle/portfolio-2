import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/nav.css";
function Back() {
  return (
    <div>
      <Link to="/" className="back-arrow">
        <FaArrowLeft />
      </Link>
    </div>
  );
}

export default Back;
