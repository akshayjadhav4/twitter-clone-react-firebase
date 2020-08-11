import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { db, auth } from "./firebase";
import { useStateValue } from "./contextApi/StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        db.collection("users")
          .doc(authUser.uid)
          .onSnapshot((snapshot) => {
            dispatch({
              type: "SET_USER_PROFILE",
              userProfile: snapshot.data(),
            });
          });
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER_PROFILE",
          userProfile: "",
        });
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
