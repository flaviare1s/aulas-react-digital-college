import { useState } from "react";
import "./App.css";

const style = {
  backgroundColor: "tomato",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
  marginTop: "10px",
};

export function Botao(props) {
  console.log(props);
  return (
    <button style={style}>
      {props.nome} {props.sobrenome} {props.msg} {props.desconto} de desconto,
      compre-me
    </button>
  );
}

export function Card() {
  return (
    <div className="card">
      <h1>NFT - Art</h1>
      <h2>video art</h2>
      <h3>R$ 50000</h3>
      <img src="vite.svg" alt="Vite Logo" />
      <Botao
        nome="Ítalo"
        sobrenome="Adler"
        desconto="10%"
        msg="Parabéns! Você ganhou "
      />
    </div>
  );
}

export function App() {
  // const [count, setCount] = useState(0)
  return <Card />;
}
