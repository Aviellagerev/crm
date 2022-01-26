import React from "react";
import './App.css';
import Navbars from "./component/Navbars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import FaultForm from './pages/faultform';
import Solution from "./pages/solution";

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/solution" element={<Solution/>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/fault-form" element={<FaultForm />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;