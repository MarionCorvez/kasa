export default function HouseDetails({ item }) {
  return (
    <section className="house" key={item.id}>
      <h1 className="house__title">{item.title}</h1>
      <p className="house__location">{item.location}</p>

      <ul className="house__tags">
        {item.tags.map((tag) => (
          <li key={tag.toString()} className="house__tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="house__rating">{item.rating}</div>
      <div className="house__host">
        <p className="house__host-name">{item.host.name}</p>
        <img
          src={item.host.picture}
          alt={item.host.name}
          className="house__host-picture"
        />
      </div>
      <p className="house__description">{item.description}</p>
      <ul className="house__equipments">
        {item.equipments.map((equipment) => (
          <li key={equipment.toString()} className="house__equipment">
            {equipment}
          </li>
        ))}
      </ul>
    </section>
  );
}
