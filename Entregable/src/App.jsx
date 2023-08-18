import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import "./App.css";

function App() {
  const [card, setCard] = useState({ nombre: "", color: "" });

  function handleSubmit(nombre, color) {
    setCard({ nombre, color });
  }

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form addOnSubmit={handleSubmit} />
      <Card nombre={card.nombre} color={card.color} />
    </div>
  );
}

export default App;
