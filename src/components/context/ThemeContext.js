import React, { Component } from "react";

const ThemeContext = React.createContext();

// why {children} instead of props??
class ThemeProvider extends Component {
  state = {
    token: "",
  };
  setToken = (token) => {
    this.setState((prevState) => ({ token }));
    console.log(this.state.token)
  };
  render() {
    const { children } = this.props
    const { token } = this.state;
    const { setToken } = this;

    return (
      <ThemeContext.Provider
        value={{
          token,
          setToken,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
