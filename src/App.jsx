import React, { useState } from "react";
import Calculadora from "./Components/Calculadora.jsx";
import LLMConsole from "./Components/LLMConsole.jsx";
import { extractHiddenPrompt, uiInfo } from "./hidden.js";

export default function App() {
  const [userTpl, setUserTpl] = useState("");
  const [userInp, setUserInp] = useState("");
  const [showLLM, setShowLLM] = useState(false);
  const hidden = extractHiddenPrompt(uiInfo);

  function handleLLM() {
    const tpl = userTpl.trim() || hidden;
    setShowLLM(true);
    console.log("RAW PROMPT:", tpl);
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <Calculadora onComputeResult={() => {}} />

      <hr />

      <h2>LLM Vulnerable</h2>

      <textarea
        value={userTpl}
        onChange={(e) => setUserTpl(e.target.value)}
        placeholder="User template (empty = internal)"
      />

      <input
        value={userInp}
        onChange={(e) => setUserInp(e.target.value)}
        placeholder="User input"
      />

      <button onClick={handleLLM}>Send to LLM (insecure)</button>

      {showLLM && <LLMConsole tpl={userTpl || hidden} userInput={userInp} />}
    </div>
  );
}
