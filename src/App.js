import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Question1 from "./questions/Question1";
import Question2 from "./questions/Question2";
import Question3 from "./questions/Question3";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/question1" component={Question1} />
            <Route exact path="/question2" component={Question2} />
            <Route exact path="/question3" component={Question3} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
