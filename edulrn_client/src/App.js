import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";
import Courses from "./components/Courses/Courses";
import SingleCourse from "./components/Courses/SingleCourse";
import AddCourse from "./components/Courses/AddCourse";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import InstructorProfile from "./components/InstructorProfile/InstructorProfile";
import Footer from "./components/Footer/Footer";

// User authentication is set true
axios.defaults.withCredentials = true;

const App = () => {
  //Set State
  const [user, setUser] = useState(null);
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    // Fetch user information from the backend.
    axios
      .get("http://localhost:5000/user", { withCredentials: true })
      .then((response) => {
        console.log(response.data.user);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} setUser={setUser} />

        {/* Pass as Props */}

        {/* <Chat /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/courses"
            element={
              <Courses
                user={user}
                coursesData={coursesData}
                setCoursesData={setCoursesData}
              />
            }
          />
          <Route path="/student" element={<StudentProfile />} />
          <Route path="/instructor" element={<InstructorProfile />} />
          <Route
            path="/course/addCourse"
            element={
              <AddCourse
                coursesData={coursesData}
                setCoursesData={setCoursesData}
              />
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              <SingleCourse
                coursesData={coursesData}
                setCoursesData={setCoursesData}
                user={user}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
