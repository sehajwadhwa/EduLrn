import axios from "axios";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthHoc(Component) {
  function GetComponent() {
    const navigate = useNavigate();
    const [auth, setauth] = useState(false);
    useEffect(() => {
      axios
        .get("http://localhost:5000/user", { withCredentials: true })
        .then(() => {
          // setTimeout(()=>{
          console.log("AUTHHOC :True ");
          return <Component />;
          // },1000)
        })
        .catch((error) => {
          // setTimeout(()=>{
          console.log("AUTHHOC :false ");
          navigate("/");
          // },4000)
        });
    }, []);

    return auth ? <Component /> : "Loading";
  }
  return GetComponent;
}

export default AuthHoc;
