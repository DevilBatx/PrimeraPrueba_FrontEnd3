import React from "react";

const Card = ({ nombre, color }) => {
  return (
    <div>
      <p>Hola {nombre}!</p>
      <p>Sabemos que tu color favorito es: {color}</p>
    </div>
  );
};

export default Card;
