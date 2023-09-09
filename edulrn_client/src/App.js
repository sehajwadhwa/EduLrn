import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";
import Courses from "./components/Courses/Courses";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import Footer from "./components/Footer/Footer";

// User authentication is set true
axios.defaults.withCredentials = true;

const App = () => {
  //Set State
  const [user, setUser] = useState(null);

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/student" element={<StudentProfile />} />
          <Route path="/instructor" element={<StudentProfile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
