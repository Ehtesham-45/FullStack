import "./App.css";
function App() {
const student = {
name: "Md Ehtesham",
course: "B.E. Computer Science Engineering",
age: 20,
university: "Chandigarh University",
semester: "5th Semester",
grade: "A+"
};
return (
<div className="container">
<div className="card">
<h1>Student Profile</h1>
<div className="line"></div>
<h2>Name : {student.name}</h2>
<h2>Course : {student.course}</h2>
<h2>Age : {student.age}</h2>
<h2>University : {student.university}</h2>
<h2>Semester : {student.semester}</h2>
<h2>Grade : {student.grade}</h2>
</div>
</div>
);
}
export default App;
