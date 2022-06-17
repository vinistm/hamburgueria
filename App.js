import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./Components/ProductsList";
import MenuContainer from "./Components/Product";
import CarrinhoCompras from "./Components/Cart";
import HeaderContainer from "./Components/Header";

function App() {
  const [resultSearch, setResultSearch] = useState("");
  const [userInput, setUserInput] = useState("");
  const[productList,setProductList] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(()=>{
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response)=>response.json())
    .then((response)=>setProductList(response))
    .catch((err)=>console.log(err))
  },[])

  
  function handleClick (product){
    if (currentSale.includes(product)) {
    } else {
      setCurrentSale([
        ...currentSale,
        productList.find((item) => item.id === product.id),
      ]);
      totalPrice(product);
    }
  };

   function handleRemove(product){
    setCurrentSale(currentSale.filter((item) => item.id !== product.id));
    setCartTotal(cartTotal - product.price);
  };

  function totalPrice(item){
    setCartTotal(item.price + cartTotal);
  };
  function ShowProducts(input) {
    setFilteredProducts(
      productList.filter(
        (item) =>
          item.name.toUpperCase().includes(input.toUpperCase()) ||
          item.category.toUpperCase().includes(input.toUpperCase())
      )
    );}

  return (
    <main className="pageContainer">
      <HeaderContainer
        ShowProducts={ShowProducts}
        userInput={userInput}
        setUserInput={setUserInput}
        setResultSearch={setResultSearch}
      />
      <div className="containerSale">
        <MenuContainer
          currentSale={currentSale}
          totalPrice={totalPrice}
          userInput={resultSearch}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
          products={productList}
        />
        <CarrinhoCompras
          resultPrice={cartTotal}
          currentSale={currentSale}
          totalPrice={totalPrice}
          handleRemove={handleRemove}
          setCurrentSale={setCurrentSale}
          setCartTotal={setCartTotal}
        />
      </div>
    </main>
  );
}

export default App;
