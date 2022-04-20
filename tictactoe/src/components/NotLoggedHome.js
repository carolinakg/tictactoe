import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
function NotLoggedHome() {
  const { setIsLogged } = useContext(AppContext);
  const [isLoginOpen, setIsLogingOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  function handleSignup() {
    //API SIGNUP
    setIsLogged(true);
  }
  function handleLogin() {
    //API login
    setIsLogged(true);
  }

  return (
    <div>
      <h1>Welcome to Tic-Tac-Toe</h1>
      <button className="initialBtns btn btn-secondary"
        onClick={() => {
          setIsLogingOpen(true);
          setIsSignupOpen(false);
        }}
      >
        Login
      </button>
      <button className="initialBtns btn btn-secondary" onClick={() => {
          setIsSignupOpen(true);
          setIsLogingOpen(false)
          }}>Signup</button>
      {isLoginOpen && (
        <form className="form">
          <input className="input"
            type="email"
            value={email}
            placeholder= "E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input className="input"
            type="password"
            value={password}
            placeholder= "Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      )}
      {isSignupOpen && (
        <form className="form">
          <input className="input"
            type="email"
            value={email}
            placeholder= "E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder= "Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder= "Confirm Password"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
          <input
            type="text"
            value={firstName}
            className="input"
            placeholder= "First name"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder= "Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder= "Nickname"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
          <button onClick={handleSignup}>Signup</button>
        </form>
      )}
      <h3>HOW TO PLAY???</h3>
    </div>
  );
}

export default NotLoggedHome;
