import React from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {theme} from '../src/theme/theme'
import Navigation from "./components/navigation/navigation";

function App(props) {

  return (
      <React.Fragment>
          <ThemeProvider theme={theme}>
              <Navigation/>
          </ThemeProvider>
      </React.Fragment>
  );
}

export default App;
