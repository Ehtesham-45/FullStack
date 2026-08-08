import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <p>The page you are looking for does not exist.</p>

      <Link to="/" className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;