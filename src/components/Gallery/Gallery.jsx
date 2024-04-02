import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.jsx";

export default function Gallery() {
  const { data, isPending, error } = useFetch("/data/data.json");

  return (
    <section className="gallery">
      {isPending && <div>Chargement en cours...</div>}
      {error && <div>{error}</div>}
      {data &&
        data.map((data) => (
          <article key={data.id} className="card">
            <Link to={`/logements/${data.id}`}>
              <h2 className="card__title">{data.title}</h2>
              <img
                src={data.cover}
                alt={data.title}
                className="card__cover"
                loading="lazy"
              />
            </Link>
          </article>
        ))}
    </section>
  );
}
