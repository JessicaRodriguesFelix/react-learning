import { useState } from "react";

export function TextInput() {
  const [textInput, setTextInput] = useState("");

  function handleChange(e) {
    setTextInput(e.target.value);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input value={textInput} onChange={handleChange}/>
      <p>You typed: {textInput}</p>
      <button onClick={()=> setTextInput("")}>Reset</button>
    </div>
  );
}
