import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/MessNavbarDinesh.jsx";
import Vote from "./components/Vote.jsx"
import Result from "./components/Result.jsx"
import About from "./components/About.jsx"
import './components/App.css';

function App() {
  return (
    
      <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path ="/vote" element = { <Vote />} />
          <Route path = "/result" element = {<Result />} />
          <Route path = "/about" element = {<About />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
