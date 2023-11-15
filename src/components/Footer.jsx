import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="px-1 pt-2">
      <section className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h6
              className="h6"
              style={{
                color: "#CCDAFD",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              Connect with us to build Your interesting project. Get IN TOuch
            </h6>
            <p>
              <a href="https://wa.me/+2348135503632" target="_blank">
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/whatsapp--v1.png"
                width={20}
                className="my-4 mr-5"
              />
              </a>
              <a href="" target="_blank"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" width={20} className="m-4" /></a>
              <a href="https://twitter.com/Teknesis_" target="_blank"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" width={20} className="m-4" /></a>
              <a href="https://web.facebook.com/teknesis"  target="_blank"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" width={20} className="m-4" /></a>
            </p>
          </div>
          <div className="col-lg-2">
            <h6 className="h6 mb-3">Services</h6>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Branding
            </p>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Graphic Design
            </p>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Web Development
            </p>
          </div>
          <div className="col-lg-2">
            <h6 className="h6 mb-3">About Us</h6>
            <Link>
              <p className="text-muted" style={{ fontSize: "16px" }}>
                Meet the team
              </p>
            </Link>
            <Link>
              <p className="text-muted" style={{ fontSize: "16px" }}>
                Blog
              </p>
            </Link>
          </div>
          <div className="col-lg-2">
            <h6 className="h6 mb-3">Pricing</h6>
          </div>
          <div className="d-flex justify-content-between col-lg-5 col-md-12"></div>
        </div>
      </section>

      <div className="container mx-auto py-5 w-full">
        <p className="d-flex flex-column">
          <span>
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/filled-message.png" width={20} className="mx-1" />
            <b className="text-muted" style={{ fontSize: "13px" }}>
              teknesisbrand101@gmail.com
            </b>
          </span>
          <span>
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/region-code.png" width={20} />
            <b className="text-muted" style={{ fontSize: "13px" }}>
              2715 Ash Dr. San Jose, South Dakota 83475.
            </b>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
