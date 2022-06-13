import './App.css';
import React from 'react';

import Header from './component/header';
import Home from './component/home';
import Exercise from './component/exercise';
import Routines from './component/routines';
import Settings from './component/settings';
import Login from './component/login';
import Register from './component/register';

import {Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Exercise />
      <>
        <Route path='/routines' component = {Routines} />
        <Route path='/exercise' component = {Exercise} />
        <Route path='/settings' component = {Settings} />
        <Route path='/register' component = {Register} />
        <Route path='/login' component = {Login} />
        <Route path='/' component = {Home} />
      </>
    </div>
  );
}


export default App;





