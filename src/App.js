import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import Search from './components/Search';
// import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  );
}

export default App;
