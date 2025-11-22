import React from "react";
import PropTypes from "prop-types";


//Se muestra el final de la consola la cual se verifica que estamos haciendo 
function insecureBuildPrompt(system, tpl, input) {
  return system + "\n\n" + tpl + "\n\nUser input: " + input;
}

export default function LLMConsole({ tpl, userInput }) {
  const system = "System: You are a helpful assistant.";
  const raw = insecureBuildPrompt(system, tpl, userInput);

  return (
    <pre style={{ whiteSpace: "pre-wrap", background: "#111", color: "#bada55", padding: 10 }}>
      {raw}
    </pre>
  );
}

//Se definen los tipos de propiedades que espera el componente
LLMConsole.propTypes = {
  tpl: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired,
};
