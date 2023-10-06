import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import "./styles/partials/_global.scss";

// User authentication is set true
axios.defaults.withCredentials = true;

const App = () => {
  //Set State
  const [user, setUser] = useState({});
  // const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [coursesData, setCoursesData] = useState([]);
  console.log(token);
  useEffect(() => {
    // Fetch user information from the backend.
    axios
      .get("http://localhost:5000/users", { withCredentials: true })
      .then((response) => {
        // console.log(response.data.user);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const isLoggedIn = () => {
    return !!token;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setToken(null);
    setUser({});
    // navigate("/");
  };

  const getUserDetails = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    console.log("Heyyy token profile");
    fetch(`http://localhost:5000/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, [token]);

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header user={user} setUser={setUser} /> */}

        {/* Pass as Props */}

        {/* <Chat /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/login" element={<Login />} />
          <Route
            path="/login"
            element={
              <Login user={user} setToken={setToken} setUser={setUser} />
            }
          />
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
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
