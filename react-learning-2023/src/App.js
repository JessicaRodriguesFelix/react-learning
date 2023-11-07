import { useState } from "react";
import "./App.css";
/* Any data that changes is called "State" */
/* When state changes we re-render the UI to reflect to the end user */
/* useState takes one optional argument, which is the default state */
function App() {
  const [count, setCount] = useState(0); //initial state in this case is zero, useState returns an array with 2 values: current state and set function that lets you update the state to a different value and triggers a re-render .
  console.log("count initial state", count);
  return (
    <div align="center" marginTop="20px">
      <button onClick={() => setCount(count + 1)}>Click Here</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
