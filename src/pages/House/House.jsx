import data from "../../../public/data/data.json";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider.jsx";
import HouseDetails from "../../components/House/HouseDetails.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";

export default function House() {
  let { id } = useParams();
  const house = data.find((house) => house.id === id);

  if (house) {
    return (
      <main>
        <Slider item={house} />
        <section className="house">
          <HouseDetails item={house} />
          <div className="house__features">
            <Accordion title="Description" content={house.description} />
            <Accordion title="Équipements" content={house.equipments} />
          </div>
        </section>
      </main>
    );
  } else {
    return <Navigate to="/404" />;
  }
}
