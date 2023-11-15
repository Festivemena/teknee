import React, { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../../images/favicon.png";
const MobileHeader = ({ currentPage }) => {
  console.log(currentPage);
  const [displayLink, setDisplayLink] = useState("none");
  return (
    <nav id="mobile_head" className="d-flex justify-content-between align-items-end p-4 shadow-sm">
      <Link to={"/"}>
        <img src={favicon} width={150} />
      </Link>

      <p className="m-0" onClick={() => setDisplayLink("block")} style={{ cursor: "pointer" }}>
        <img src="https://img.icons8.com/ios/50/7950F2/menu-rounded.png" width={30} />
      </p>
      <div style={{zIndex: '10'}} className={`d-${displayLink} position-absolute top-0 start-0 z-index-3 w-100 shadow-sm z-10`}>
        <ul className="d-block justify-content-center align-items-end bg-white py-3">
          <p
            className="position-absolute"
            style={{ right: "10px", cursor: "pointer" }}
            onClick={() => setDisplayLink("none")}
          >
            <img src="https://img.icons8.com/ios-glyphs/30/7950F2/delete-sign.png" />
          </p>
          <li className="p-2 mx-3">
            <Link to={"/"} className="text-primary">
              Home
            </Link>
          </li>
          <li className="p-2 mx-3">
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li className="p-2 mx-3">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-2 mx-3">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="p-2 mx-3">
            <Link to={"/services"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileHeader;
