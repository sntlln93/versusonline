import { useRef, useState, useEffect } from "react";

const useSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const track = useRef(null);

  const setSlidePosition = (slide, index) => {
    const slideWidth = track.current.children[0].getBoundingClientRect().width;
    slide.style.left = `${slideWidth * index}px`;
  };

  useEffect(() => {
    Array.from(track.current.children).forEach(setSlidePosition);
  }, []);

  useEffect(() => {
    setInterval(() => moveToSlide(activeSlide + 1), 4000);
  }, [activeSlide]);

  const moveToSlide = (targetIndex) => {
    const slidesCount = track.current.children.length;
    if (!slidesCount > 0) return;

    const targetSlide =
      targetIndex >= slidesCount
        ? track.current.children[0]
        : track.current.children[targetIndex];

    track.current.style.transform = `translateX(-${targetSlide.style.left})`;

    setActiveSlide(
      targetIndex < slidesCount && targetIndex >= 0 ? targetIndex : 0
    );
  };

  return {
    activeSlide,
    moveToSlide,
    track,
  };
};

export default useSlider;
