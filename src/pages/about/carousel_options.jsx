import arrowNextIcon from "../../images/icon/arrow_right.png";
import arrowPreviousIcon from "../../images/icon/arrow_left.png";
const carouselDefaults = {
  renderArrowPrev: (onClick, hasPrev) => {
    return (
      <button
        onClick={onClick}
        className="btn-pager btn-carousel d-block position-absolute rounded-circle bg-white"
        style={{
          left: "-1.75em",
        }}
        disabled={!hasPrev}
      >
        <img src={arrowPreviousIcon} alt="arrow-right" />
      </button>
    );
  },
  renderArrowNext: (onClick, hasNext) => {
    return (
      <button
        onClick={onClick}
        className="btn-pager btn-carousel d-block position-absolute rounded-circle bg-white"
        style={{
          right: "-1.75em",
        }}
        disabled={!hasNext}
      >
        <img src={arrowNextIcon} alt="arrow-next" />
      </button>
    );
  },
  showThumbs: false,
  showStatus: false,
};

export default carouselDefaults;
