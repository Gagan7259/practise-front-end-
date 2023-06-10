import React, { useReducer } from "react";


const UUsereducerhook1 = () => {
    const reducer = (state, action) => {
        switch (action.type) {
          case "INCREMENT":
            return { count: state.count + 1, ShowText: state.SetCount };
          case "DECREMENT":
            return { count: state.count - 1, ShowText: state.ShowText };
          case "Toggle":
            return { count: state.count, ShowText: !state.ShowText };
          default:
            return state;
        }
      };
  const [state, dispatch] = useReducer(reducer, { count: 0, ShowText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "Toggle" });
        }}
      >
        Click Here
      </button>
      {state.ShowText && <p>This is Text</p>}
    </div>
  );
};

export default UUsereducerhook1;
