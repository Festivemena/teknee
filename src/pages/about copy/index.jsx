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
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * The AboutScreen component is rendered for the route /about.
 */
export default function AboutScreen() {
  return (
    <Layout currentPage={"about"}>
      <TopBanner />
      <SuccessStories />
      <OtherServices />
      <ContactLocation />
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

const Card = ({ location }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Location</h5>
        <p className="card-text">{location}</p>
      </div>
    </div>
  );
};

const ContactLocation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card location="Location 1" />
        </div>
        <div className="col-md-4">
          <Card location="Location 2" />
        </div>
        <div className="col-md-4">
          <Card location="Location 3" />
        </div>
      </div>
    </div>
  );
};
