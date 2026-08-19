import React from "react";
import students from "../data/student";
import { Link } from "react-router";

function Dashboard() {
  const counts = ["Active", "Completed", "Inactive", "Dropped"].map((status) => ({
    label: status,
    value: students.filter((student) => student.status === status).length,
  }));
  const attention = counts[2].value + counts[3].value;
  const cards = [
    ["Total students", students.length, "All registered students", "blue", "◌"],
    ["Active students", counts[0].value, "Currently enrolled", "green", "✓"],
    ["Completed", counts[1].value, "Courses completed", "violet", "⌂"],
    ["Needs attention", attention, "Inactive or dropped", "amber", "!"],
  ];

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  }

  return (
    <main className="dashboard">
      <div className="dashboard__topline">
        <div>
          <p className="eyebrow">Overview / Student operations</p>
          <h1>Good morning, Admin<span className="title-dot">.</span></h1>
          <p className="dashboard__subtitle">Keep an eye on your student community and its progress.</p>
        </div>
        <div className="dashboard__actions">
          <button className="logout-button" type="button" onClick={handleLogout}>Sign out</button>
          <Link to="/studentlist" className="primary-button">View students <span>↗</span></Link>
        </div>
      </div>

      <section className="metrics" aria-label="Student metrics">
        {cards.map(([label, value, note, tone, icon]) => (
          <article className="metric-card" key={label}>
            <div className={`metric-icon metric-icon--${tone}`} aria-hidden="true">{icon}</div>
            <div><p className="metric-label">{label}</p><p className="metric-value">{value}</p><p className="metric-note">{note}</p></div>
            <span className="metric-trend">+12%</span>
          </article>
        ))}
      </section>

      <div className="dashboard-grid">
        <section className="dashboard-panel overview-panel">
          <div className="panel-heading"><div><p className="section-kicker">Student overview</p><h2>Enrollment snapshot</h2></div><span className="panel-period">This month <b>⌄</b></span></div>
          <div className="overview-total"><div><strong>{students.length}</strong><span>students tracked</span></div><div className="completion-badge">↑ 8.4% <small>vs last month</small></div></div>
          <div className="status-bars">
            {counts.map((item, index) => <div className="status-item" key={item.label}><div className="status-item__label"><span className={`status-number status-number--${["green", "violet", "amber", "red"][index]}`}>0{index + 1}</span><span>{item.label}</span><strong>{item.value}</strong></div><div className="status-track"><span className={`status-fill status-fill--${["green", "violet", "amber", "red"][index]}`} style={{ width: `${(item.value / students.length) * 100}%` }} /></div></div>)}
          </div>
        </section>

        <section className="dashboard-panel actions-panel">
          <div className="panel-heading"><div><p className="section-kicker">Shortcuts</p><h2>Quick actions</h2></div><span className="panel-mark">✦</span></div>
          <p className="panel-description">Jump into the areas you use most often.</p>
          <Link to="/studentlist" className="action-link"><span className="action-icon action-icon--blue">⌘</span><span><strong>Student directory</strong><small>Browse every learner profile</small></span><b>↗</b></Link>
          <Link to="/studentlist" className="action-link"><span className="action-icon action-icon--violet">▦</span><span><strong>Course progress</strong><small>Review courses and grades</small></span><b>↗</b></Link>
        </section>
      </div>
      <footer className="dashboard-footer"><span>STUDENT MANAGEMENT SYSTEM</span><span>Last synced just now <i /></span></footer>
    </main>
  );
}

export default Dashboard;
