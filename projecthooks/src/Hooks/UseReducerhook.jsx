import React, { useState } from "react";

const UseReducerhook = () => {
  const [Count, SetCount] = useState(0);
  const [Text, ShowText] = useState(true);

  const Handler = () => {
    SetCount(Count + 1);
    ShowText(!Text);
  };
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={Handler}>Clock Here</button>
      {Text && <p>This is Text</p>}
    </div>
  );
};

export default UseReducerhook;
