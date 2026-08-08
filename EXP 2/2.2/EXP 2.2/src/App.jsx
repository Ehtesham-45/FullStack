import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      setError(false);

      // Check internet connection
      if (!navigator.onLine) {
        throw new Error("No Internet Connection");
      }

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const users = await response.json();
      setData(users);
    } catch (err) {
      setError(true);
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();

    function handleOffline() {
      setError(true);
      setMessage("No Internet Connection");
    }

    function handleOnline() {
      setError(false);
      getUsers();
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Filter users based on search
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h2>Loading Users...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-card">
          <div className="error-icon">📡</div>

          <h2>{message}</h2>

          <p>Please check your internet connection and try again.</p>

          <button onClick={getUsers}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Users Directory</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredData.length > 0 ? (
          filteredData.map((user) => (
            <div className="card" key={user.id}>
              <h2>{user.name}</h2>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>City:</strong> {user.address.city}
              </p>

              <p>
                <strong>Street:</strong> {user.address.street}
              </p>

              <p>
                <strong>Website:</strong> {user.website}
              </p>

              <button>View Profile</button>
            </div>
          ))
        ) : (
          <h2>No user found.</h2>
        )}
      </div>
    </div>
  );
}

export default App;