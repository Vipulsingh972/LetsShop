import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        textAlign: "center",
        background: "linear-gradient(135deg,rgb(135, 218, 241),rgb(189, 201, 217))",
        padding: "30px",
        borderRadius: "12px",
        width: "300px",
        margin: "50px auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#fff" }}>
        Counter using useReducer
      </h2>
      <p style={{ fontSize: "40px", fontWeight: "bold", color: "#fff", margin: "15px 0" }}>
        {state.count}
      </p>
      <button
        style={{
          padding: "10px 20px",
          margin: "10px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          color: "#fff",
          background: "#28a745",
          transition: "0.3s",
        }}
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        style={{
          padding: "10px 20px",
          margin: "10px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          color: "#fff",
          background: "#dc3545",
          transition: "0.3s",
        }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        style={{
          padding: "10px 20px",
          margin: "10px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          color: "#fff",
          background: "#007bff",
          transition: "0.3s",
        }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}
