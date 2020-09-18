import React from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {theme} from '../src/theme/theme'
import Navigation from "./components/navigation/navigation";
import {Switch,Route,BrowserRouter} from "react-router-dom";
import FrontPage from "./components/frontPage/frontPage";
import SubscribedPage from "./components/subscribedPage/subscribedPage";
import TrendingPage from "./components/trendingPage/trendingPage";

function App(props) {

  return (
      <React.Fragment>
          <BrowserRouter>
              <ThemeProvider theme={theme}>
                  <Navigation/>
                  <Switch>
                      <Route path={'/trending'} component={TrendingPage}/>
                      <Route path={'/subscribed'} component={SubscribedPage}/>
                      <Route path={'/'} component={FrontPage}/>
                  </Switch>
              </ThemeProvider>
          </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
