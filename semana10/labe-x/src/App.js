import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import {Body} from "./components/Styled/styles"
import Header from "./components/Header/Header"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer/Footer"
import TravelsPage from "./components/TravelsPage"

function App() {
  return (
    <Body>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header/>
            <HomePage/>
            <Footer/>
          </Route>
          <Route exact path="/home">
            <Header/>
            <HomePage/>
            <Footer/>
          </Route>
          <Route exact path="/home/:tipo">
            <Header/>
            <HomePage/>
            <Footer/>
          </Route>
          <Route exact path="/inscricao">
            <Header/>
            <RegistrationPage/>
            <Footer/>
          </Route>
          <Route exact path="/login">
            <Header/>
            <NotFound/>
            <Footer/>
          </Route>
          <Route exact path="/login/:log">
            <Header/>
            <LoginPage/>
            <Footer/>
          </Route>
          <Route exact path="/viagens">
            <Header/>
            <TravelsPage/>
            <Footer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Body>
  );
}
export default App;
