import React, { useEffect, useState } from "react";
// import resume from "../../assets/download/Ishimdar-Developer.pdf";
import resume from "../../assets/download/Ishimdar-Developer.pdf";
import './index.css';

const navbarData = [
  {
    key: "1",
    text: "About Me",
    id: "aboutMe",
    url: "",
  },
  {
    key: "2",
    text: "Hire Me",
    id: "hireMe",
    url: "",
  },
  {
    key: "3",
    text: "My Resume",
    id: "myResume",
    url: "",
  },
  {
    key: "4",
    text: "Educational Details",
    id: "educationalDetails",
    url: "",
  },
  {
    key: "5",
    text: "Contact Me",
    id: "contactUs",
    url: "",
  },
];

export default function Navbar() {
  //   const [address, setAddress] = useState("");
  const [active, setActive] = useState("aboutMe");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // const loc = window.location;
    // setAddress(loc);
  }, []);

  const handleClick = (item) => {
    setActive(item.id);
    setIsMobile(false);
  };

  const handleCliclMob = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#aboutMe">
            Ishimdar Ahamad
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => handleCliclMob()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMobile ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navbarData.map((item) => {
                return (
                  <li className="nav-item" key={item.key}>
                    <a
                      className={`nav-link ${
                        active === item.id ? "active" : ""
                      }`}
                      aria-current="page"
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(item)}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* <span class="navbar-text">
                Download Resume
            </span> */}
            {/* <button type="button" class="btn btn-primary">Primary</button> */}
            <div className="download">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-cloud-download-alt"></i> Download Resume
                </a>
            </div>            
          </div>
        </div>
      </nav>
    </header>
  );
}
