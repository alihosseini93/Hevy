import './App.css';
import React from 'react';

import Navbar from './component/navbar';
import Home from './component/home';

// import Home from './component/home';
// import Exercise from './component/exercise';
// import Routines from './component/routines';
// import Settings from './component/settings';
// import Login from './component/login';
// import Register from './component/register';

import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}


export default App;





