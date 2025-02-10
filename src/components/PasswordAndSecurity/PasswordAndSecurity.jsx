import { Link } from 'react-router-dom';
import './PasswordAndSecurity.css';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const PasswordAndSecurity = () => {
  const {  handleLogin } = useContext(AppContext);

  return (
    <section className="password-security-page">
      <div className="password-security-heading">
        <h1>Change Your email or password</h1>
      </div>
      <div className="password-security-form-wrapper">
        <form onSubmit={handleLogin}>
          <div className="password-security-input-container">
            <input type="text" id="username-input" placeholder="Username" />
            <span className="password-security-icon">
              <span className="material-symbols-outlined">person</span>
            </span>
          </div>

          <div className="password-security-input-container">
            <input type="password" id="password-input" placeholder="Password" />
            <span className="password-security-icon">
              <span className="material-symbols-outlined">key</span>
            </span>
          </div>

          <div className="password-security-login-button">
            <button>Login</button>
          </div>
        </form>

        <div className="password-security-links">
          <p>
            Don&apos;t have an account? 
            <Link to="/register">Register</Link>
          </p>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </section>
  );
};

export default PasswordAndSecurity;
