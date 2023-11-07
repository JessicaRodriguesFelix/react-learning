import { useState } from "react";

export const CheckBox = () => {
   const [checked, setChecked] = useState(false);
  return (
    <div>
      <input type="checkbox" onClick={()=> setChecked(true)}/>
      <label>I like this</label>
      <p>I did not like this</p>
    </div>
  );
};
