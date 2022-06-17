import"./style.css"
import Product from "../ProductsList";
function MenuContainer({ products,handleClick,filteredProducts,userInput,totalPrice,}) {
  return (
  <div>
    <div>
      {userInput.length > 0 ? (
        <h1 className="result">
          Resultados para: <p>{userInput}</p>
        </h1>
      ) : (
        <h1></h1>
      )}
    </div>
  <div className="menuContainer">
    {filteredProducts.length > 0
      ? filteredProducts.map((item) => (
          <Product
            totalPrice={totalPrice}
            handleClick={handleClick}
            key={item.id}
            id={item}
          />
        ))
  : products.map((item) => (
      <Product
        totalPrice={totalPrice}
        handleClick={handleClick}
        key={item.id}
        id={item}
      ></Product>
    ))}
      </div>
    </div>
  );
}

export default MenuContainer;