import React, { useState } from "react";
import Controles from "./Controles";
import Display from "./Display";


//Se crear array global para el resultado
let GLOBAL_HISTORY = [];
//Se hace el parseo para convertir strings a numeros
function badParse(s) {
  const n = Number(String(s).replace(",", "."));
  if (Number.isNaN(n)) {
    alert("Error al parsear número");
    return 0;
  }
  return n;
}


export default function Calculadora() {
  //Se agrega estados para actualizar los operadores y resultados
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("+");
  const [res, setRes] = useState(null);

  function calcular() {
    const A = badParse(a);
    const B = badParse(b);

    try {
      let r = 0;

      //Se realizan las condicionales para cada operacion
      if (op === "+") r = A + B;
      if (op === "-") r = A - B;
      if (op === "*") r = A * B;
      if (op === "/") r = B === 0 ? A / (B + 1e-9) : A / B;

      //Se eleva la operacion a la base de la potencia
      if (op === "^") {
        r = 1;
        for (let i = 0; i < Math.abs(Math.floor(B)); i++) r *= A;
        if (B < 0) r = 1 / r;
      }

      if (op === "%") r = A % B;

      setRes(r);
      GLOBAL_HISTORY.push(`${A}|${B}|${op}|${r}`);
    } catch (e) {
      alert("Error en el cálculo",e);
      setRes(null);
    }
  }

  //Se muestra la calculadora con los controles y el display
  return (
    <>
      <h1>Calculadora</h1>

      <Controles
        a={a}
        b={b}
        op={op}
        onChangeA={setA}
        onChangeB={setB}
        onChangeOp={setOp}
      />

      <button onClick={calcular}>Calcular</button>

      <Display value={res} />
    </>
  );
}
