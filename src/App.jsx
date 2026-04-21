import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import FooterSection from "./Component/Footer";
import "./index.css";
import "./App.css";
import "./pages.css";

// Eagerly load the home page — it's the first thing users see
import Mainsection from "./Pages/Home";

// Lazy-load all other pages — they only download when the user navigates there
const FoodCard                = lazy(() => import("./Pages/AvaliableFood"));
const BurgerCard              = lazy(() => import("./Pages/About"));
const ChefCookers             = lazy(() => import("./Pages/Cookers"));
const StepByStepInstructions  = lazy(() => import("./Pages/Steps"));

// Simple fullscreen spinner shown while a lazy page loads (rare after first visit)
const PageSpinner = () => (
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "center",
    minHeight: "60vh", color: "var(--amber)", fontSize: "2rem",
  }}>
    🔥
  </div>
);

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main style={{ paddingTop: 70 }}>
        <Suspense fallback={<PageSpinner />}>
          <Routes>
            <Route path="/"        element={<Mainsection searchTerm={searchTerm} />} />
            <Route path="/food"    element={<FoodCard    searchTerm={searchTerm} />} />
            <Route path="/about"   element={<BurgerCard  searchTerm={searchTerm} />} />
            <Route path="/cookers" element={<ChefCookers />} />
            <Route path="/steps"   element={<StepByStepInstructions />} />
          </Routes>
        </Suspense>
      </main>
      <FooterSection />
    </Router>
  );
}

export default App;
