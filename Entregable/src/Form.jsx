import { useState } from "react";

function Form({ addOnSubmit }) {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length < 3 || nombre.trim() === "") {
      setError(
        "Ingresar un nombre de 3 letras o mas, sin espacio al principio y al final"
      );
    } else if (color.length < 6) {
      setError("Ingresa un color que de 6 letras o mas");
    } else {
      setError("");
      addOnSubmit(nombre, color);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingrese su color favorito"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;
