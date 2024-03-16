import { useState } from "react";

export default function Housing() {
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
      {
        // use data State Variable For Get Data Use JavaScript Map Mathod
        data
          ? data.map(function (data) {
              return (
                <div key={data.id}>
                  <h4>{data.id}</h4>
                  <h2>{data.title}</h2>
                  <img src={data.cover} alt={data.title} />
                  <h3>{data.description}</h3>
                </div>
              );
            })
          : ""
      }
    </>
  );
}
