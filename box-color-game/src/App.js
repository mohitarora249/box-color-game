import React, { useState, useEffect } from "react";

import Board from "../src/components/Board/Board";
import BoardConfiguration from "../src/components/BoardConfiguration/BoardConfiguration";
import { AVAILABLE_SCREENS } from "../src/constants/constants";
import "./App.css";

import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import Login from "../src/components/Login/Login";

import { getCookie } from "../src/utils/cookieUtil";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // check cookie
    if (getCookie("userInfo")) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      {!isAuthenticated && <Redirect to="/login" component={Login} />}
      {isAuthenticated && <Redirect to="/configuration" />}

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/configuration">
          <BoardConfiguration />
        </Route>
        <Route path="/">
          <Board />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
