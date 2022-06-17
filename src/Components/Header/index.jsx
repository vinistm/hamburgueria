import { useState } from "react";
import Logo from"../img/logo.png"
import"./style.css"

function HeaderContainer({
  ShowProducts,
  userInput,
  setUserInput,
  setResultSearch,
}) {
  return (
    <header className="Header">
      <img src={Logo}/>
      <div className="busca">
        <input
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          type="search"
          placeholder="Digitar Pesquisa"
        />
        <button
          onClick={() => {
            ShowProducts(userInput);
            setResultSearch(userInput);
          }}
        >
          Pesquisar
        </button>
      </div>
    </header>
  );
}

export default HeaderContainer;