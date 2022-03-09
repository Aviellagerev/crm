import React from "react";
import './App.css';
import Navbars from "./component/Navbars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import Complain from './pages/complain';
import SignUp from './pages/signup';
import FaultForm from './pages/faultform';
import Solution from "./pages/solution";
import Complainview from "./pages/ComplainView"
function App() {
  return (
    

    <Router>
      <Navbars dir="rtl"/>
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/solution" element={<Solution/>} />
        <Route exact path="/complain" element={<Complain />} />
        <Route exact path="/fault-form" element={<FaultForm />} />
        <Route exact path="/complainview" element={<Complainview />}/>
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;