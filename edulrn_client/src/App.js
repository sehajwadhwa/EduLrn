import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";

// User authentication is set true
axios.defaults.withCredentials = true;

function App() {
  //Set State
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user information from the backend.
    axios
      .get("http://localhost:5000/user", { withCredentials: true })
      .then((response) => {
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
