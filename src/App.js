import React from "react";
import Main from "./components/Main";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Fetching Todos</h3>
        <Main />
      </div>
    );
  }
}

export default App;
