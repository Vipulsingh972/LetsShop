// src/contextTheme/ThemeComponent.js
import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    container: {
      textAlign: "center",
      padding: "50px",
      transition: "background 0.3s, color 0.3s",
      backgroundColor: theme === "light" ? "#ffffff" : "#333333",
      color: theme === "light" ? "#000000" : "#ffffff",
      minHeight: "100vh",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      marginTop: "20px",
      cursor: "pointer",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "white",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h2>{theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}</h2>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeComponent;
