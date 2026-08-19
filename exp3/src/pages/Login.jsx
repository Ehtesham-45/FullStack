import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "ab",
    password: "",

  });

  function handleChange(e) {
    const { name, value } = e.target
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value
    })

  };

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "admin123") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/dashboard"
    }
    else {
      alert("Username or password is incorrect");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f6f9",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "350px",
      padding: "30px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      textAlign: "center",
    },

    heading: {
      marginBottom: "25px",
      color: "#333",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
      boxSizing: "border-box",
    },

    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#0d6efd",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "bold",
    },

    text: {
      marginTop: "15px",
      color: "#666",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🔐 Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.text}>
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;