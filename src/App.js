
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";
import Edit from "./Pages/Edit/Edit";
import LerMais from "./Pages/LerMais/lerMais"

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/lerMais" element={<LerMais/>}/>
      </Routes>
    </Router>
)
}


export default App;