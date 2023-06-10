import React, { useReducer } from "react";

const REDUCER = () => {
  const reducer = (state, action) => {
    // eslint-disable-next-line
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1, Text:state.Text };
      case "Toggle":
        return { count: state.count, Text: !state.Text };
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, Text: true });
  const Handler = () => {
    dispatch({ type: "Increment" });
    dispatch({ type: "Toggle" });
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={Handler}>Click Here</button>
      {state.Text && <p>This is Text</p>}
    </div>
  );
};

export default REDUCER;
