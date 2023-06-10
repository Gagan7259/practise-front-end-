import React, { useReducer } from "react";

const Reducer3 = () => {
    const reducer = (state, action) => {
        // eslint-disable-next-line
        switch (action.type) {
            
          case "Increment":
            return { Count: state.Count + 1, ShowText: state.ShowText };
          case "Text":
            return { Count: state.Count, ShowText: !state.ShowText };
        }
      };
  const [state, dispatch] = useReducer(reducer, { Count: 0, ShowText: true });
  return (
    <div>
      <h2>{state.Count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "Text" });
        }}
      >
        CliCl It Here
      </button>
      {state.ShowText && <p>This Is For U Only</p>}
    </div>
  );
};

export default Reducer3;
