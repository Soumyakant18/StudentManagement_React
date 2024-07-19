import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/student/AddStudent.jsx";
import "./App.css";
import Home from "./Home";
import StudentView from "./component/student/StudentView";

import Navbar from "./component/common/NavBar.jsx";
import EditStudent from "./component/student/EditStudent.jsx";
import StudentPofile from "./component/student/StudentProfile.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view" element={<StudentView />}></Route>
          <Route exact path="/add" element={<AddStudent />}></Route>
          <Route exact path="/edit-student/:id" element={<EditStudent/>}></Route>
          <Route exact path="/student-profile/:id" element={<StudentPofile/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
