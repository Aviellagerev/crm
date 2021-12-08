import React from "react";
import './App.css';
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import FaultForm from './pages/faultform';
import Solution from "./pages/solution";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/solution" element={<Solution/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fault-form" element={<FaultForm />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;