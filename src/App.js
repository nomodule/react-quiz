import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import theme from "./theme";

import { Quiz } from "./screens";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='App' style={{ marginTop: "3rem" }}>
        <CssBaseline />
        <Quiz />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
