import "./styles.css";
import Layout from "../../components/Layout";
import { useMemo } from "react";
import clients from "./clients_data";
import { PersonCard, ProjectCard } from "./card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useBreakpoint from "./useBreakpoint";
import penTool from "./img/pen-tool.svg";
import brush from "./img/brush.svg";
import colorSwatch from "./img/color-swatch.svg";
import videoHorizontal from "./img/video-horizontal.svg";
import shapes from "./img/shapes.svg";
import calendarEdit from "./img/calendar-edit.svg";
import documentCode from "./img/document-code.svg";
import carouselDefaults from "./carousel_options";
import videoBackground from "./video/background.mp4";
import videopng from "./img/video.png";
import vrline from "../../images/vrline.png";
import icon6 from "../../images/icon/icon6.png";

/**
 * The AboutScreen component is rendered for the route /about.
 */
export default function AboutScreen() {
  return (
    <Layout currentPage={"about"}>
      <TopBanner />
      <ContactLocation />
      <SuccessStories />
      <OtherServices />
    </Layout>
  );
}

function TopBanner() {
  return (
    <div className="d-flex flex-column align-items-center top-banner px-4 px-sm-5 about-screen py-0 ring-canvas">
      <video
        src={videoBackground}
        playsInline
        autoPlay
        muted
        loop
        poster={videopng}
      ></video>
      <div className="video_overlay" />
      <span className="rings ring-1"></span>
      <span className="rings ring-2"></span>

      <span className="flex-grow-1"></span>
      <h1 className="top-banner_h1">About Us</h1>
      <h2 className="top-banner_h2 about_h2 align-self-center">
        Our work structure is tailored for success
      </h2>
      <p className="w-banner about_p">
        Our mission is to ensure proper market presence and sales conversion for
        all brands and businesses we are involved with
      </p>
      <span className="flex-grow-1"></span>
    </div>
  );
}

function SuccessStories() {
  const bp = useBreakpoint();
  const chunkSize = bp.isMobile ? 1 : bp.isTablet ? 2 : 3;
  const chunks = useMemo(
    function () {
      const data = [];
      for (let i = 0; i < clients.length; ) {
        const chunk = [];
        for (let j = 0; j < chunkSize && i < clients.length; j++, i++) {
          chunk.push(clients[i]);
        }
        data.push(chunk);
      }
      return data;
    },
    [chunkSize]
  );
  return (
    <div className="about-screen">
      <div className="container">
        <div className="testimonial_container">
          <div className="testimonial_title">
            <h2 className="text-size-4  text-black-1">
              Our Testimonials And Success Stories
            </h2>
            <p>
              Our clients are very excited to work with us through the different
              stages of our work process
            </p>
          </div>
          <div>
            <button className="get_in_touch">Get in touch</button>
          </div>
        </div>
        <Carousel
          {...carouselDefaults}
          centerMode={!bp.isSlimDesktop || !bp.isSlimMobile || bp.isSlimTablet}
          centerSlidePercentage={
            bp.isWideMobile || bp.isWideTablet
              ? 75
              : bp.isWideDesktop
              ? 83.333
              : 100
          }
          showIndicators={false}
          className="container-carousel"
        >
          {chunks.map((arr) => (
            <div className="d-flex justify-content-center justify-content-sm-center">
              {arr.map((e, index) => (
                <ProjectCard {...e} key={index} />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export function OtherServices() {
  return (
    <div className="about-screen pt-5 pb-0">
      <div className="bg-white w-100">
        <div className="container py-5 px-3 px-sm-0">
          <h6 className="text-style-2 mb-3 text-center">
            Other services we offer
          </h6>
          <div className="d-flex flex-wrap justify-content-md-center justify-content-start">
            <ServiceItem label="Logo Creation" icon={penTool} />
            <ServiceItem label="Brand Identity" icon={colorSwatch} />
            <ServiceItem label="Graphics Design" icon={brush} />
            <ServiceItem label="UI/UX Design" icon={shapes} />
            <ServiceItem label="Web Development" icon={documentCode} />
            <ServiceItem label="App Development" icon={documentCode} />
            <ServiceItem label="Video Editting" icon={videoHorizontal} />
            <ServiceItem label="Project Management" icon={calendarEdit} />
          </div>
          <button className="btn-style-1 about_btn">Get in touch</button>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ icon, label }) {
  return (
    <div className="about_service mx-2 mx-lg-3 my-4 px-2">
      <img src={icon} alt={label} width={48} height={48} className="me-2" />
      <span className="text-style-3">{label}</span>
    </div>
  );
}

function ContactLocation() {
  return (
    <section
      className="text-white d-flex flex-column justify-content-center align-content-center align-items-center"
      style={{
        background: "#F3F3F3",
        padding: "96px 0px",
      }}
    >
      <div style={{ width: "90%" }}>
        <div className="my-3 d-flex flex-column align-items-center w-100">
          <img src={icon6} className="text-center pb-3" />
          <p
            style={{
              fontFamily: "inter",
              fontSize: "36px",
              color: "#3B4355",
              textAlign: "center",
            }}
          >
            Reach us @
          </p>
          <small className="text-muted">
            Reach us via our contact and address below
          </small>
        </div>
        <div className="d-flex justify-content-center w-100 flex-wrap">
          <div className="d-flex mx-5">
            <img src={vrline} className="mx-4" />
            <div className="d-flex flex-column">
              <p
                style={{
                  fontSize: "48px",
                  color: "#3B4355",
                  marginBottom: "0px",
                }}
              >
                USA
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3B4355",
                  marginBottom: "0px",
                }}
              >
                +1 234827277
              </p>
              <p className="text-muted">13 texas road, via apa josh</p>
            </div>
          </div>

          <div className="d-flex mx-5">
            <img src={vrline} className="mx-4" />
            <div className="d-flex flex-column">
              <p
                style={{
                  fontSize: "48px",
                  color: "#3B4355",
                  marginBottom: "0px",
                }}
              >
                Dubia
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3B4355",
                  marginBottom: "0px",
                }}
              >
                +25 98625524455
              </p>
              <p className="text-muted">Abu dhabi, celestian</p>
            </div>
          </div>

          <div className="d-flex mx-5">
            <img src={vrline} className="mx-4" />
            <div className="d-flex flex-column">
              <p
                style={{
                  fontSize: "48px",
                  color: "#3B4355",
                  marginBottom: "0px",
                }}
              >
                Nigeria
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3B4355",
                  marginBottom: "0px",
                }}
              >
                +234 8134460259
              </p>
              <p className="text-muted">54 lekki, lagos island</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
