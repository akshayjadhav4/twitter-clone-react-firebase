import React, { useState } from "react";
import "./SignUp.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import { auth, db } from "../../firebase";
import { useStateValue } from "../../contextApi/StateProvider";

function SignUp() {
  const history = useHistory();
  const [{ user }] = useStateValue();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        return db.collection("users").doc(response.user.uid).set({
          displayName: name,
          userName: userName,
        });
      })
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  if (user?.uid) return <Redirect to="/" />;

  return (
    <div className="signUp">
      <TwitterIcon className="signup__logo" />
      <h2 className="SignUp__title">Create your account</h2>
      <form className="signUp__form">
        <TextField
          style={{ width: "400px" }}
          label="Full Name"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "400px" }}
          label="User Name"
          variant="filled"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />

        <TextField
          style={{ width: "400px" }}
          label="Email"
          type="email"
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
        <Button className="signUp__tweetButton" type="submit" onClick={signup}>
          Sign Up
        </Button>
      </form>
      <Link to="/login" className="signUp__signinLink">
        <p>Sign in for Twitter</p>
      </Link>
    </div>
  );
}

export default SignUp;
