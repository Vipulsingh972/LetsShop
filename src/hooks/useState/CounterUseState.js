import { useState } from "react";

export default function CounterUseState() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      textAlign: "center",
      background: "linear-gradient(135deg, #f8b500, #ff6200)",
      padding: "30px",
      borderRadius: "12px",
      width: "300px",
      margin: "50px auto",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
    heading: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#fff",
    },
    countDisplay: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "#fff",
      margin: "15px 0",
    },
    button: {
      padding: "10px 20px",
      margin: "10px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      color: "#fff",
      transition: "0.3s",
    },
    increment: {
      background: "#28a745",
    },
    decrement: {
      background: "#dc3545",
    },
    reset: {
      background: "#007bff",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Counter using useState</h2>
      <p style={styles.countDisplay}>{count}</p>
      <button style={{ ...styles.button, ...styles.increment }} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={{ ...styles.button, ...styles.decrement }} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button style={{ ...styles.button, ...styles.reset }} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}





// import { useState } from "react";

// function CounterUseState() {
//   const [count, setCount] = useState(0);

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         background: "linear-gradient(135deg, #f8b500, #ff6200)",
//         padding: "30px",
//         borderRadius: "12px",
//         width: "400px",
//         margin: "50px auto",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//       }}
//     >
//       <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#fff" }}>
//         Counter using useState
//       </h2>
//       <p
//         style={{
//           fontSize: "40px",
//           fontWeight: "bold",
//           color: "#fff",
//           margin: "15px 0",
//         }}
//       >
//         {count}
//       </p>
//       <button
//         style={{
//           padding: "10px 20px",
//           margin: "10px",
//           borderRadius: "8px",
//           border: "none",
//           cursor: "pointer",
//           fontSize: "16px",
//           color: "#fff",
//           background: "#28a745",
//           transition: "0.3s",
//         }}
//         onClick={() => setCount(count + 1)}
//       >
//         Increment
//       </button>
//       <button
//         style={{
//           padding: "10px 20px",
//           margin: "10px",
//           borderRadius: "8px",
//           border: "none",
//           cursor: "pointer",
//           fontSize: "16px",
//           color: "#fff",
//           background: "#dc3545",
//           transition: "0.3s",
//         }}
//         onClick={() => setCount(count - 1)}
//       >
//         Decrement
//       </button>
//       <button
//         style={{
//           padding: "10px 20px",
//           margin: "10px",
//           borderRadius: "8px",
//           border: "none",
//           cursor: "pointer",
//           fontSize: "16px",
//           color: "#fff",
//           background: "#007bff",
//           transition: "0.3s",
//         }}
//         onClick={() => setCount(0)}
//       >
//         Reset
//       </button>

      
//     </div>
//   );
// }

// export default CounterUseState;
