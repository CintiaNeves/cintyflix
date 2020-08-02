import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video/Index.js';
import CadastroCategoria from './pages/cadastro/categoria/Index.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component = {App} exact/>
      <Route path="/cadastro/video" component = {CadastroVideo} />
      <Route path="/cadastro/categoria" component = {CadastroCategoria} />
      <Route component = {() => (<div><h1>Ah, não. Parece que você está doidão, este caminho nem existe!</h1></div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

