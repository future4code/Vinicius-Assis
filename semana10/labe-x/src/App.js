import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import {Body} from "./components/Styled/styles"
import Header from "./components/Header/Header"

function App() {
  return (
    <Body>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header/>
            <HomePage/>
          </Route>
          <Route exact path="/home">
            <Header/>
            <HomePage/>
          </Route>
          <Route exact path="/home/:tipo">
            <Header/>
            <HomePage/>
          </Route>
          <Route exact path="/inscricao">
            <Header/>
            <RegistrationPage/>
          </Route>
          <Route exact path="/login">
            <Header/>
            <LoginPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Body>
  );
}
export default App;
