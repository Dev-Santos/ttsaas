import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

//Import Components
import Home from "./pages"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import Architecture from "./components/Architecture";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
