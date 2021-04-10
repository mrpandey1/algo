import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Main from './pages/main';

const theme = createMuiTheme({

  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;