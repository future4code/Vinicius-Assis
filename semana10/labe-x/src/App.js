import React, { useState } from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import {Body} from "./components/Styled/styles"
import Header from "./components/Header/Header"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer/Footer"
import TravelsPage from "./components/TravelsPage"
import CreateTravelPage from "./components/CreateTravelPage"
import ApprovalPage from "./components/ApprovalPage"

function App() {
  const [logado, setLogado] = useState(false)

  const muda = ()=>{
    setLogado(!logado)
  } 
  return (
    <Body>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Header muda={muda} logado={logado}/>
            <HomePage/>
            <Footer/>
          </Route>
          <Route exact path="/">
            <Header muda={muda} logado={logado}/>
            <HomePage/>
            <Footer/>
          </Route>
          <Route exact path="/home/:tipo">
            <Header muda={muda} logado={logado}/>
            <HomePage/>
            <Footer/>
          </Route>
          <Route exact path="/inscricao">
            <Header muda={muda} logado={logado}/>
            <RegistrationPage/>
            <Footer/>
          </Route>
          <Route exact path="/login/:log">
            <Header muda={muda} logado={logado}/>
            <LoginPage/>
            <Footer/>
          </Route>
          <Route exact path="/logado/viagens">
            <Header muda={muda} logado={logado}/>
            <TravelsPage/>
            <Footer/>
          </Route>
          <Route exact path="/logado/nova-viagem">
            <Header muda={muda} logado={logado}/>
            <CreateTravelPage/>
            <Footer/>
          </Route>
          <Route exact path="/logado/pagina-de-aprovacao">
            <Header muda={muda} logado={logado}/>
            <ApprovalPage/>
            <Footer/>
          </Route>
          <Route path="/">
            <Header muda={muda} logado={logado}/>
            <NotFound/>
            <Footer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Body>
  );
}
export default App;
