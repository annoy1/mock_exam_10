// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import QuizApp from "./components/QuizApp";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/quiz" component={QuizApp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
