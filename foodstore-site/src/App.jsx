import React, { useState } from "react";  // 👈 import useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import FooterSection from "./Component/Footer";
import Mainsection from "./Pages/Home";
import FoodCard from "./Pages/AvaliableFood";
import BurgerCard from "./Pages/About";
import ChefCookers from "./Pages/Cookers";
import StepByStepInstructions from "./Pages/Steps";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); 
      // const [] = useState()
  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
      
      <Routes>
        <Route path="/" element={<Mainsection searchTerm={searchTerm}/>} />
        <Route path="/food" element={<FoodCard searchTerm={searchTerm} />} />
        <Route path="/about" element={<BurgerCard searchTerm={searchTerm} />} />
        <Route path="/cookers" element={<ChefCookers searchTerm={searchTerm} />} />
        <Route path="/steps" element={<StepByStepInstructions searchTerm={searchTerm} />} />
      </Routes>

      <FooterSection />
    </Router>
  );
}

export default App;
