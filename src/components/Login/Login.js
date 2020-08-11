import React, { useState } from "react";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../contextApi/StateProvider";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }] = useStateValue();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  if (user?.uid) return <Redirect to="/" />;
  return (
    <div className="login">
      <TwitterIcon className="login__logo" />
      <h2 className="login__title">Log in to Twitter</h2>
      <form className="login__form">
        <TextField
          style={{ width: "400px" }}
          label="Email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "400px" }}
          label="Password"
          variant="filled"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="login__tweetButton" type="submit" onClick={login}>
          Log In
        </Button>
      </form>
      <Link to="/signup" className="login__signupLink">
        <p>Sign up for Twitter</p>
      </Link>
    </div>
  );
}

export default Login;
