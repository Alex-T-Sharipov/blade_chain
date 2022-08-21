import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);

//   const history = useHistory();
  let navigate = useNavigate()

  const loginUser = async (username, password) => {
    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await response.json();
    console.log(data)
    if (response.status === 200) {
      console.log(data)
      setAuthTokens(data);
      setUser(jwt_decode(data.access_token));
      localStorage.setItem("authTokens", JSON.stringify(data));
    //   history.push("/");
      navigate("/", {replace: true})
    } else {
      alert("Something went wrong!");
    }
  };
  
  const registerUser = async (username, email, password1, password2) => {
    const response = await fetch("http://127.0.0.1:8000/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password1,
        password2
      })
    });

    const data = await response.json();
    console.log(data)
    if (response.status === 200) {
        console.log(data)
        setAuthTokens(data);
      setUser(jwt_decode(data.access_token));
      localStorage.setItem("authTokens", JSON.stringify(data));
    //   history.push("/login");
    navigate('/', {replace: true})
    } else {
      alert("Something went wrong!");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    // history.push("/");
    navigate('/',{replace:  true})
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
  };

  useEffect(() => {
    if (authTokens) {
      console.log(authTokens)
      setUser(jwt_decode(authTokens.access_token));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};