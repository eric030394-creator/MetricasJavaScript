import React from "react";
import PropTypes from "prop-types";

export default function Display({ value }) {
let content ;
    if (value === null || value === undefined) {
    content = "---";
  } else {
    content = value;
  }
  return (
    <div style={{ minWidth: 120 }}>
     Resultado:{content}
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.number,
};
