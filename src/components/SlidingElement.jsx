import React, { useRef, useEffect, useState } from "react";

const SlidingElement = ({ children, isVisible }) => {
  const slidingRef = useRef(null);
  const [shouldSlideIn, setShouldSlideIn] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldSlideIn(true);
    }
  }, [isVisible]);

  console.log(shouldSlideIn);

  return (
    <div ref={slidingRef} className={`sliding-element ${shouldSlideIn ? "slide-in" : ""}`}>
      {children}
    </div>
  );
};

export default SlidingElement;
