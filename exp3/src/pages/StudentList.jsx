import React from "react";
import students from "../data/student";
import { Link } from "react-router";

function StudentList() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Student List</h1>
      <p style={styles.subtitle}>All registered students</p>

      <div style={styles.grid}>
        {students.map((std) => (
          <div style={styles.card} key={std.id}>
            <div style={styles.left}>
              <div style={styles.id}>#{std.id}</div>

              <div>
                <h3 style={styles.name}>{std.name}</h3>
                <p style={styles.label}>Student</p>
              </div>
            </div>

            <Link
              to={`/viewprofile/${std.id}`}
              style={styles.button}
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f7fb",
    padding: "35px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  title: {
    margin: "0",
    fontSize: "30px",
    color: "#172033",
  },

  subtitle: {
    margin: "6px 0 25px",
    color: "#64748b",
    fontSize: "14px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "16px",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e5eaf1",
    borderRadius: "14px",
    padding: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    boxShadow: "0 5px 18px rgba(15, 23, 42, 0.05)",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  id: {
    width: "42px",
    height: "42px",
    borderRadius: "11px",
    background: "#eaf1ff",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "13px",
  },

  name: {
    margin: "0",
    fontSize: "16px",
    color: "#172033",
  },

  label: {
    margin: "4px 0 0",
    fontSize: "11px",
    color: "#94a3b8",
  },

  button: {
    background: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    padding: "9px 13px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
};

export default StudentList;