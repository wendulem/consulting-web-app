import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import Sales from "./pages/Sales";
import DesktopBreakpoint from "./components/responsive_utilities/desktop_breakpoint";
import TabletBreakpoint from "./components/responsive_utilities/tablet_breakpoint";
import PhoneBreakpoint from "./components/responsive_utilities/phone_breakpoint";

import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <DesktopBreakpoint>
        <ThemeProvider>
          <Router>
            <ScrollToTop>
              <Route path="/" exact component={Homepage} />
              <Switch>
                <Route path="/home" exact component={Homepage} />
                <Route path="/sales" exact component={Sales} />
              </Switch>
            </ScrollToTop>
          </Router>
        </ThemeProvider>
      </DesktopBreakpoint>

      <PhoneBreakpoint>
        <ThemeProvider>
          <Router>
            <ScrollToTop>
              <Route path="/" exact component={Homepage} />
              <Switch>
                <Route path="/home" exact component={Homepage} />
                <Route path="/sales" exact component={Sales} />
              </Switch>
            </ScrollToTop>
          </Router>
        </ThemeProvider>
      </PhoneBreakpoint>

      <TabletBreakpoint>
        <ThemeProvider>
          <Router>
            <ScrollToTop>
              <Route path="/" exact component={Homepage} />
              <Switch>
                <Route path="/home" exact component={Homepage} />
                <Route path="/sales" exact component={Sales} />
              </Switch>
            </ScrollToTop>
          </Router>
        </ThemeProvider>
      </TabletBreakpoint>
    </div>
  );
}

export default App;
