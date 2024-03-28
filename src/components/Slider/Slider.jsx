import { useState } from "react";
import Arrow from "../../assets/images/arrow-left.svg";

export default function Slider({ item }) {
  const [index, setIndex] = useState(0);
  const hasPrev = index !== 0;
  const hasNext = index < item.pictures.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(item.pictures.length - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let picture = item.pictures[index];
  return (
    <section key={item.pictures.length} className="slider">
      <img src={picture} className="slider__picture" />
      <p className="slider__nav">
        {index + 1}/{item.pictures.length}
      </p>
      <img
        onClick={handlePrevClick}
        src={Arrow}
        className="slider__arrow slider__arrow--left"
      />
      <img
        onClick={handleNextClick}
        src={Arrow}
        className="slider__arrow slider__arrow--right"
      />
    </section>
  );
}
