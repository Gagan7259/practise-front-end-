import React, { useState } from "react";

const Hook1 = () => {
  const [counter, SetCounter] = useState(0);

  const Increrment = () => {
    SetCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div>
      {counter} <button onClick={Increrment}>Increment</button>
    </div>
  );
};

export default Hook1;
