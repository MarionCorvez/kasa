import { useState } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  // react Hook For State Handler
  const [data, setData] = useState(null);

  // Fetch Function
  fetch("./data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // store Data in State Data Variable
      setData(data);
    })
    .catch(function (err) {
      console.log(err, " error");
    });

  return (
    <>
      <section className="gallery">
        {
          // use data State Variable For Get Data Use JavaScript Map Method
          data
            ? data.map(function (data) {
                return (
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
                );
              })
            : ""
        }
      </section>
    </>
  );
}
