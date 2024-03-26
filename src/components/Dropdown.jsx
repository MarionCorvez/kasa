import AccordionData from "../../public/data/AccordionData.js";
import React, { useRef, useState } from "react";
import Arrow from "../assets/arrow-up.svg";

const Collapsible = () => {
  const [open, setOPen] = useState(false);
  return (
    <div>
      <button>toggle</button>
      {open && <div>toggle me</div>}
    </div>
  );
};

const toggle = () => {
  setOPen(!open);
};

return (
  <div>
    <button onClick={toggle}>toggle</button>
    {open && (
      <div className="toggle">
        <h4>toggle</h4>
      </div>
    )}
  </div>
);
