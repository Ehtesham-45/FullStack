import { useState } from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const studentData = [
    { name: "John Doe", age: 20, course: "Computer Science", grade: "A" },
    { name: "Jane Smith", age: 22, course: "Mathematics", grade: "B" },
    { name: "Michael Johnson", age: 21, course: "Physics", grade: "A" },
    { name: "Emily Davis", age: 19, course: "Chemistry", grade: "C" },
    { name: "William Brown", age: 23, course: "Biology", grade: "B" },
  ];

  const [show, setShow] = useState(true);

  function toggleCard() {
    setShow(!show);
  }

  return (
    <>
      <h1>Student Details</h1>

      <button onClick={toggleCard}>
        {show ? "Hide Students" : "Show Students"}
      </button>

      {show &&
        studentData.map((student, index) => (
          <StudentCard
            key={index}
            studentdata={student}
          />
        ))}
    </>
  );
}

export default App;