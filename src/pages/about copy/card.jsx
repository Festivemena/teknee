import "./card.css";
import twitterIcon from "../../images/icon/twitter.png";
import dribbleIcon from "../../images/icon/dribble.png";
import Svg from "./svg";
import { Link } from "react-router-dom";
import url from "./url";
export function PersonCard({ name, title, description, image }) {
  return (
    <div
      className="person-card p-4 flex-grow-1"
      style={{
        backgroundImage: url(image),
      }}
    >
      <div className="person-card_info-root p-4">
        <h4 className="person-card_info-name text-size-3 mb-3">{name}</h4>
        <span className="person-card_info-title text-size-2">{title}</span>
        <p className="person-card_info-description text-size-1">
          {description}
        </p>
        <div className="mt-4">
          <img className="me-4" src={twitterIcon} alt="twitter" />
          <img src={dribbleIcon} alt="dribble" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({
  id,
  name,
  testimonial: description,
  logo,
  logoSvg,
}) {
  return (
    <div
      className="person-card p-4 m-4 justify-content-between align-items-start"
      style={{
        backgroundColor: "#01237B",
      }}
    >
      <div>
        {logo ? <img src={logo} alt={name} style={{ height: 44 }} /> : logoSvg}
      </div>
      <div className="person-card_info-root p-4 text-start">
        <h4 className="person-card_info-name text-size-3 mb-3">{name}</h4>
        <p className="person-card_info-description text-size-1">
          "{description}"
        </p>
        <Link class="text-white text-size-1" to={`/case-study?project=${id}`}>
          Read case study
          <Svg icon="open" size="11" viewBox="0 0 11 12" className="mx-1" />
        </Link>
      </div>
    </div>
  );
}
