import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import QuotePage from "./pages/QuotePage";
import Sales from "./pages/Sales";

import "antd/dist/antd.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop>
          <Route path="/" exact component={Homepage} />
          <Switch>
            <Route path="/home" exact component={Homepage} />
            <Route path="/sales" exact component={Sales} />
            <Route path="/quote" exact component={QuotePage} />
          </Switch>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
