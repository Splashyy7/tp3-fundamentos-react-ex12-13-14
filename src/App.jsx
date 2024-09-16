import React, { useState } from "react";
import Produto from "./produto.jsx";

const App = () => {
  const [mostrarDisponiveis, setMostrarDisponiveis] = useState(false);

  const produtos = [
    { nome: "Notebook", preco: 3000, disponivel: true },
    { nome: "Smartphone", preco: 1500, disponivel: false },
    { nome: "Tablet", preco: 2000, disponivel: true }
  ];

  const produtosFiltrados = mostrarDisponiveis
    ? produtos.filter(produto => produto.disponivel)
    : produtos;

  const handleCheckboxChange = () => {
    setMostrarDisponiveis(!mostrarDisponiveis);
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <label>
        <input
          type="checkbox"
          checked={mostrarDisponiveis}
          onChange={handleCheckboxChange}
        />
        Mostrar apenas produtos disponíveis
      </label>
      {produtosFiltrados.map((produto, index) => (
        <Produto key={index} produto={produto} />
      ))}
    </div>
  );
};

export default App;
