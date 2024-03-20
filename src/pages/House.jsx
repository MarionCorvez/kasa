// Page WIP

import { useState } from "react";
import { useParams } from "react-router-dom";

export default function House() {
  let { id } = useParams();
  id = Number(id);

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

  const house = data.find((house) => house.id === id);

  return (
    <>
      <div>
        <h3>{house.title}</h3>
        <p>{house.description}</p>
      </div>
    </>
  );
}
