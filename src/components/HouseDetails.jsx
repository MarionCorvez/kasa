import data from "../../public/data/data.json";
import { useParams, Navigate } from "react-router-dom";

export default function HouseDetails() {
  let { id } = useParams();

  const house = data.find((house) => house.id === id);
  if (house) {
    return (
      <>
        <h2>Ici la fiche logement</h2>
        <div key={house.id}>
          <h3>{house.title}</h3>
          <p>{house.description}</p>
          <img src={house.cover} alt={house.title} className="house__cover" />
        </div>
      </>
    );
  } else {
    return <Navigate to="/404" />;
  }
}
