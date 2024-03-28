import { useState } from "react";
import Arrow from "../../assets/images/arrow-up.svg";

export default function Accordion({ title, content }) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  // Check kind of content to display
  // const elementType = typeOf(element);
  // function getDisplayNameForReactElement()

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
    <div onClick={handleClick} className="accordion">
      <div className="accordion__title-wrapper">
        <h3>{title}</h3>
        <img
          src={Arrow}
          className={`accordion__arrow ${showMore ? "active" : ""}`}
        />
      </div>
      <div className={`accordion__details-wrapper ${showMore ? "open" : ""}`}>
        {typeOfContent}
      </div>
    </div>
  );
}
