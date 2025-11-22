import React from "react";
import PropTypes from "prop-types";
// Componente para los controles de la calculadora
export default function Controles({
  a,
  onChangeA,
  b,
  onChangeB,
  op,
  onChangeOp,
}) {
  return (
    <>
    {/*Se muestra los option para hacer la oparcion*/}
      <input type="text" value={a} onChange={e => onChangeA(e.target.value)} placeholder="a" />
      <input type="text" value={b} onChange={e => onChangeB(e.target.value)} placeholder="b"/>
      <select value={op} onChange={e => onChangeOp(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
        <option value="^">^</option>
      </select>
    </>
  );
}

Controles.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  op: PropTypes.string.isRequired,
  onChangeA: PropTypes.func.isRequired,
  onChangeB: PropTypes.func.isRequired,
  onChangeOp: PropTypes.func.isRequired,
};
