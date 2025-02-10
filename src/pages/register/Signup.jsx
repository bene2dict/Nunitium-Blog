import { Link, 
  useNavigate 
} from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    description: "",
    password: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("description", formData.description);
    data.append("password", formData.password);


    try {
      const response = await axios.post("http://localhost:4000/api/users/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result =  response.data;
      console.log(result);
      
      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/login"); 
      } else {
        alert(result || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <section className="register-page-wrapper">
      <div className="heading">
        <h1>Welcome!</h1>
        <p>Register to get the most out of nuntium.</p>
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>

        <div className="input-container">
            <input type="text" id="input-with-icon-name" name="name" onChange={handleChange} placeholder="Name" />
            <span className="placeholder-icon">
              <i className="material-symbols-outlined">person</i>
            </span>
          </div>

          <div className="input-container">
            <input type="text" id="input-with-icon-username" name="username" onChange={handleChange} placeholder="Username" />
            <span className="placeholder-icon">
              <i className="material-symbols-outlined">person</i>
            </span>
          </div>

          <div className="input-container">
            <input type="email" id="input-with-icon-email" name="email"  onChange={handleChange}  placeholder="Email" />
            <span className="placeholder-icon">
              <i className="material-symbols-outlined">email</i>
            </span>
          </div>

          <div className="input-container">
            <input type="text" id="input-with-icon-description" name="description" onChange={handleChange}  placeholder="Description" />
            <span className="placeholder-icon">
              <i className="material-symbols-outlined">Description</i>
            </span>
          </div>

          <div className="input-container">
            <input type="password" id="input-with-icon-password" name="password" onChange={handleChange}  placeholder="Password" />
            <span className="placeholder-icon">
              <i className="material-symbols-outlined">key</i>
            </span>
          </div>

          <div className="register-button">
          <button type="submit">Register</button>
          </div>
        </form>

        <div className="login-account-wrapper">
          <p>
            Already have an account? 
            <Link to="/login">login</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Signup