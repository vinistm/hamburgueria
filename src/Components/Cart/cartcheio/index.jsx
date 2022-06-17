import"./style.css"
function CardCarrinho({ item, handleRemove}) {
  return (
    <div className="cardCarrinho">
      <div className="img">
        <img src={item.img} alt="" />
      </div>
      <div className="ajuste">
        <h1>{item.name}</h1>
        <p>{item.category}</p>
      </div>
     
      <h4
        onClick={() => {
          handleRemove(item);
        }}
      >
        Remover
      </h4>
    </div>
  );
}

export default CardCarrinho;
