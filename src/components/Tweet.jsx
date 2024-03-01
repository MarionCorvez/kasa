export function Tweet({id, name, content, like, onDelete}) {

  const onLike = () => {
    console.log("LIKE", props.name);
  }
  return (
    <div className="tweet">
      <button onClick={() => onDelete(id)} className="tweet--delete">✖</button>
      <h3>{name}</h3>
      <p>{content}</p>
      <button>{like} ❤</button>
    </div>
  );
}