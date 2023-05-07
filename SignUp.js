import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SingUp.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message));
  };

  const goTo = () => {
    history("/login/register");
  };
  return (
    <>
      <form className="login__form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Login
        </button>
        <p>
          Don't have an account? <a onClick={goTo}>Sign up</a>
        </p>
      </form>
    </>
  );
}

export default SignUp;
