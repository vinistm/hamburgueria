import"./style.css"
function Product({ id, handleClick, totalPrice }) {
  return (
    <div className="cardProduct">
      <div className="img">
      <img src={id.img} alt="" />

      </div>
      <div className="textos">
        <h1>{id.name}</h1>
      <p>{id.category}</p>
      <h2>{id.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</h2>
      <button
        onClick={() => {
          handleClick(id);
        }}
      >
        Adicionar
      </button>
      </div>
      
    </div>
  );
}

export default Product;
