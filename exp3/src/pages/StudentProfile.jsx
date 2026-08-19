import React from "react";
import { useParams, Link } from "react-router";
import students from "../data/student";

function StudentProfile() {
  const { id } = useParams();

  const student = students.find(
    (std) => std.id === Number(id)
  );

  if (!student) {
    return (
      <div style={styles.notFound}>
        <h2>Student Not Found</h2>
        <Link to="/studentlist" style={styles.backButton}>
          ← Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <p style={styles.smallTitle}>STUDENT PROFILE</p>
          <h1 style={styles.title}>{student.name}</h1>
          <p style={styles.subtitle}>
            View student information and academic details
          </p>
        </div>

        <Link to="/studentlist" style={styles.backButton}>
          ← Back to Students
        </Link>
      </div>

      {/* Profile Card */}
      <div style={styles.profileCard}>
        {/* Student Header */}
        <div style={styles.profileHeader}>
          <div style={styles.avatar}>
            {student.name.charAt(0)}
          </div>

          <div>
            <h2 style={styles.name}>{student.name}</h2>
            <p style={styles.email}>{student.email}</p>
          </div>

          <span
            style={{
              ...styles.status,
              ...(student.status === "Active"
                ? styles.active
                : student.status === "Completed"
                  ? styles.completed
                  : student.status === "Dropped"
                    ? styles.dropped
                    : styles.inactive),
            }}
          >
            {student.status}
          </span>
        </div>

        {/* Details */}
        <div style={styles.details}>
          <div style={styles.detail}>
            <span style={styles.label}>Student ID</span>
            <span style={styles.value}>#{student.id}</span>
          </div>

          <div style={styles.detail}>
            <span style={styles.label}>Email</span>
            <span style={styles.value}>{student.email}</span>
          </div>

          <div style={styles.detail}>
            <span style={styles.label}>Phone</span>
            <span style={styles.value}>{student.phone}</span>
          </div>

          <div style={styles.detail}>
            <span style={styles.label}>Address</span>
            <span style={styles.value}>{student.address}</span>
          </div>

          <div style={styles.detail}>
            <span style={styles.label}>Grade</span>
            <span style={styles.grade}>{student.grade}</span>
          </div>

          <div style={styles.detail}>
            <span style={styles.label}>Course</span>
            <span style={styles.value}>{student.course}</span>
          </div>

          <div style={styles.detail}>
            <span style={styles.label}>Status</span>
            <span style={styles.value}>{student.status}</span>
          </div>
        </div>
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
    color: "#172033",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
    gap: "20px",
  },

  smallTitle: {
    margin: "0 0 5px",
    color: "#2563eb",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  title: {
    margin: "0",
    fontSize: "30px",
    fontWeight: "700",
  },

  subtitle: {
    margin: "6px 0 0",
    color: "#64748b",
    fontSize: "14px",
  },

  backButton: {
    background: "#ffffff",
    color: "#2563eb",
    textDecoration: "none",
    border: "1px solid #dbe3ef",
    padding: "10px 15px",
    borderRadius: "9px",
    fontSize: "13px",
    fontWeight: "600",
  },

  profileCard: {
    maxWidth: "800px",
    background: "#ffffff",
    border: "1px solid #e5eaf1",
    borderRadius: "18px",
    padding: "30px",
    boxShadow: "0 8px 25px rgba(15, 23, 42, 0.05)",
  },

  profileHeader: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    paddingBottom: "25px",
    borderBottom: "1px solid #eef2f7",
  },

  avatar: {
    width: "65px",
    height: "65px",
    borderRadius: "18px",
    background: "#e8f0ff",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    fontWeight: "700",
  },

  name: {
    margin: "0",
    fontSize: "22px",
  },

  email: {
    margin: "5px 0 0",
    color: "#94a3b8",
    fontSize: "13px",
  },

  status: {
    marginLeft: "auto",
    padding: "7px 12px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "600",
  },

  active: {
    background: "#dcfce7",
    color: "#15803d",
  },

  completed: {
    background: "#ede9fe",
    color: "#7c3aed",
  },

  inactive: {
    background: "#fef3c7",
    color: "#b45309",
  },

  dropped: {
    background: "#fee2e2",
    color: "#dc2626",
  },

  details: {
    marginTop: "10px",
  },

  detail: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "16px 5px",
    borderBottom: "1px solid #f1f5f9",
  },

  label: {
    color: "#94a3b8",
    fontSize: "13px",
  },

  value: {
    color: "#334155",
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "right",
  },

  grade: {
    background: "#eff6ff",
    color: "#2563eb",
    padding: "5px 10px",
    borderRadius: "7px",
    fontSize: "12px",
    fontWeight: "700",
  },

  notFound: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
};

export default StudentProfile;