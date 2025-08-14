function MenuItem({ item }) {
  return (
    <>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <div>{item.price}</div>
      <span>{item.category}</span>
      <p>{item.description}</p>
      <h4>{item.available}</h4>
    </>
  );
}

export default MenuItem;