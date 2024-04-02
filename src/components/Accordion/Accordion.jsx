import { useState } from "react";
import Arrow from "/images/arrow-up.svg";

export default function Accordion({ title, content }) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  let typeOfContent = "";

  const elementType = typeof content;

  if (elementType === "string") {
    typeOfContent = <p className="accordion__details-content">{content}</p>;
  } else {
    typeOfContent = (
      <ul className="accordion__details-content">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="accordion">
      <div onClick={handleClick} className="accordion__title-wrapper">
        <h3>{title}</h3>
        <img
          src={Arrow}
          className={`accordion__arrow ${showMore ? "active" : ""}`}
        />
      </div>
      {showMore && (
        <div className={`accordion__details-wrapper ${showMore ? "open" : ""}`}>
          {typeOfContent}
        </div>
      )}
    </div>
  );
}
