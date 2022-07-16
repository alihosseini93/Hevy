import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
import Routines from "./component/routines";
import Exercise from "./component/exercise";
import Login from "./component/login";
import Settings from "./component/settings";
import Newroutin from "./component/newroutine";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="routines" element={<Routines />} />
      <Route path="exercise" element={<Exercise />} />
      <Route path="login" element={<Login />} />
      <Route path="settings" element={<Settings />} />
      <Route path="newroutin" element={<Newroutin />} />
    </Routes>
  </BrowserRouter>
);