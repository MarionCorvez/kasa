import AccordionData from "../data/AccordionData.js";
import React, { useRef, useState } from "react";
import Arrow from "../assets/arrow.svg";

//  accordionitem component
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <button
        className={`title-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="title-content">{title}</p>
        <img src={Arrow} alt="" className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="content-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="content-content">{content}</p>
      </div>
    </div>
  );
};

// main Accordion component
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {AccordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
