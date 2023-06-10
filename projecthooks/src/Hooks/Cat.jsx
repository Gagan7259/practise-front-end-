import React, { useReducer } from "react";

const Cat = () => {
  const reducer = (state, action) => {
    // eslint-disable-next-line
    switch (action.type) {
      case "NoOfcats":
        return { Cats: state.Cats + 1, Voice: state.Voice };
      case "VoiceCat":
        return { Cats: state.Cats, Voice: !state.Voice };
    }
  };
  const [state, dispatch] = useReducer(reducer, { Cats: 0, Voice: true });

  return (
    <div>
      <h1>Even Number Cats</h1>
      <p>{state.Cats}</p>
      <button
        onClick={() => {
          dispatch({ type: "NoOfcats" });
          dispatch({ type: "VoiceCat" });
        }}
      >
        Click Here
      </button>
      {this.Voice && <p>This Is Even Cats Voice</p>}
    </div>
  );
};

export default Cat;
