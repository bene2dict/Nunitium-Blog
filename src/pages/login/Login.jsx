import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  useContext,
  useState
} from "react";
import axios from "axios";
import AppContext from "../../context/AppContext";




const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {updateUser} = useContext(AppContext);


  const navigate = useNavigate();
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("email", formData.email)
    data.append("password", formData.password)



    try {
      const response = await axios.post("http://localhost:4000/api/users/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data;
      if (response.statusText === "OK") {
        console.log(result)
        const token = response.data.token;
        const user = response.data.userData;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        updateUser(JSON.stringify(user));
        navigate("/dashboard");
      } else {
        console.error("Login failed");
      };
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again");
    }
  }



  return (
    <section className="login-page-wrapper">
      <div className="heading">
        <h1>Welcome back!</h1>
        <p>Sign in to get the most out of nuntium.</p>
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" id="input-with-icon-username" name="email" onChange={handleChange} placeholder="Email" />
            <span className="placeholder-icon">
              <span className="material-symbols-outlined">person</span>
            </span>
          </div>

          <div className="input-container">
            <input type="password" id="input-with-icon-password" name="password" onChange={handleChange} placeholder="Password" />
            <span className="placeholder-icon">
              <span className="material-symbols-outlined">key</span>
            </span>
          </div>

          <div className="login-button">
            <button>Login</button>
          </div>
        </form>

        <div className="register-forgot-password-wrapper">
          <p>
            Don&apos;t have an account?
            <Link to="/register">Register</Link>
          </p>

          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </section>
  )
}

export default Login