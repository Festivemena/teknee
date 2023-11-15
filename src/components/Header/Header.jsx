import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../images/favicon.png";
const Header = ({ currentPage }) => {
  return (
    <nav
      id="main_head"
      className="d-flex justify-content-between align-items-end p-4 shadow-sm"
      style={{
        background: "background: #F3F3F3",
      }}
    >
      <Link to={"/"}>
        <img src={favicon} width={150} />
      </Link>
      <ul className="d-flex justify-content-center align-items-center">
        <li className="px-4">
          <Link
            to={"/home"}
            className={currentPage == "home" ? "text-primary" : null}
            style={{
              borderBottom: currentPage == "home" ? "2px solid blue" : null,
              paddingBottom: "5px",
            }}
          >
            Home
          </Link>
        </li>
        <li className="px-4">
          <Link
            to={"/portfolio"}
            className={currentPage == "portfolio" ? "text-primary" : null}
            style={{
              borderBottom: currentPage == "portfolio" ? "2px solid blue" : null,
              paddingBottom: "5px",
            }}
          >
            Portfolio
          </Link>
        </li>

        <li className="px-4">
          <Link
            to={"/about"}
            className={currentPage == "about" ? "text-primary" : null}
            style={{
              borderBottom: currentPage == "about" ? "2px solid blue" : null,
              paddingBottom: "5px",
            }}
          >
            About Us
          </Link>
        </li>
        {/* <li className="px-4">
          <Link
            to={"/services"}
            className={currentPage == "services" ? "text-primary" : null}
            style={{
              borderBottom: currentPage == "services" ? "2px solid blue" : null,
              paddingBottom: "5px",
            }}
          >
            Services
          </Link>
        </li> */}
        <li className="px-4">
          <Link
            to={"/blog"}
            className={currentPage == "blog" ? "text-primary" : null}
            style={{
              borderBottom: currentPage == "blog" ? "2px solid blue" : null,
              paddingBottom: "5px",
            }}
          >
            Blog
          </Link>
        </li>
        <li
          className="tek_bg_btn_secondary"
          style={{
            padding: "10px 20px",
          }}
        >
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
