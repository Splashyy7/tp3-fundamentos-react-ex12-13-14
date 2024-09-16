import React from "react";

const Produto = ({ produto }) => {
  const estiloIndisponivel = {
    color: "gray",
    textDecoration: "line-through",
  };

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid black" }}>
      <h2 style={produto.disponivel ? {} : estiloIndisponivel}>{produto.nome}</h2>
      <p style={produto.disponivel ? {} : estiloIndisponivel}>
        Preço: R$ {produto.preco}
      </p>
      <p>
        {produto.disponivel ? "Disponível" : "Indisponível"}
      </p>
    </div>
  );
};

export default Produto;
