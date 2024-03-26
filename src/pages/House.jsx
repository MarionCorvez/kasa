import data from "../../public/data/data.json";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/Slider.jsx";
import HouseDetails from "../components/HouseDetails.jsx";
import Accordion from "../components/Accordion.jsx";

export default function House() {
  let { id } = useParams();
  const house = data.find((house) => house.id === id);

  if (house) {
    return (
      <main>
        <Slider item={house} />
        <HouseDetails item={house} />
        <Accordion />
      </main>
    );
  } else {
    return <Navigate to="/404" />;
  }
}
