import Stars from "../Stars/Stars.jsx";
import Accordion from "../Accordion/Accordion.jsx";

export default function HouseDetails({ item }) {
  return (
    <div className="house__properties">
      <div className="house__content">
        <h1 className="house__title">{item.title}</h1>
        <p className="house__location">{item.location}</p>

        <ul className="house__tags">
          {item.tags.map((tag) => (
            <li key={tag.toString()} className="house__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="house__hosting">
        <div className="house__rating">
          <Stars scaleValue={item.rating} />
        </div>
        <div className="house__host">
          <p className="house__host-name">{item.host.name}</p>
          <img
            src={item.host.picture}
            alt={item.host.name}
            className="house__host-picture"
          />
        </div>
      </div>
    </div>
  );
}
