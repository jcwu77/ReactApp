import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./view/Routes";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Routes} />
    </Router>
  );
};

export default App;
