import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Routes>
          {/* apakah bisa? */}
          <Route path="/portfolio" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  )
}

export default App;