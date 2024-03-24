import data from "../../public/data/data.json";
import { useParams, Navigate } from "react-router-dom";

export default function Card() {
  let { id } = useParams();

  const house = data.find((house) => house.id === id);
  if (house) {
    return (
      <>
        <h2>Ici le slider</h2>
        <img src={house.cover} alt={house.title} className="house__cover" />
      </>
    );
  } else {
    return <Navigate to="/404" />;
  }
}
