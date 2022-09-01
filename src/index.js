import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
import Routines from "./component/routines";
import Exercise from "./component/exercise";
import Login from "./component/login";
import Settings from "./component/settings";
import Newroutin from "./component/newroutine";
// import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'

import { store } from './store'
import { Provider } from 'react-redux'
import CardSelect from "./component/cardSelect";
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store={store}>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<App />} />
         <Route path="routines" element={<Routines />} />
         <Route path="exercise" element={<Exercise />} />
         <Route path="login" element={<Login />} />
         <Route path="settings" element={<Settings />} />
         <Route path="newroutin" element={<Newroutin />} />
         <Route path="cardSelect/:id" element={<Newroutin />} />
       </Routes>
     </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

