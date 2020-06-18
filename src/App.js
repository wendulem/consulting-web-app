import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import Homepage from "./pages/Homepage";

import "antd/dist/antd.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Route path="/" exact component={Homepage} />
        {/* <Route path="/(|home|dashboard|review)" exact component={NavBar} />
    <Route path="/" exact component={Homepage} />
    <Switch>
      <Route path="/home" exact component={Homepage} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/review" exact component={Review} />
    </Switch> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
