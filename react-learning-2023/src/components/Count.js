import { useState } from "react";
/* Any data that changes is called "State" */
/* When state changes we re-render the UI to reflect to the end user */
/* useState takes one optional argument, which is the default state */
export const Count = () => {
const [count, setCount] = useState(0); //initial state in this case is zero, useState returns an array with 2 values: current state and set function that lets you update the state to a different value and triggers a re-render .
  const [name, setName] = useState("Taylor");
  console.log("count initial state", count);

  function handleClickName() {
    setName("Robin");
    console.log("name", name); // Still "Taylor"!
  }
  function handleClickCount() {
    setCount(count + 1);
  }
  return (
    <div align="center" marginTop="20px">
      {count === 0 ? (
        <h1> You pressed me {count} time</h1>
      ) : (
        <h1> You pressed me {count} times</h1>
      )}
      <button onClick={handleClickCount}>Click Here</button>
      <h1>{name}</h1>
      <button onClick={handleClickName}>name</button>
    </div>
  );
};
// export default Count