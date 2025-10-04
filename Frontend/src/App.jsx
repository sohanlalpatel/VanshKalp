import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DoctorLandingPage from "./main/component/LandinPage";
import WhatsAppButton from "./main/component/WhatsAppButton";

function App() {
  return (
    <>
      <WhatsAppButton />
      <Router>
        <Routes>
          <Route path="/we" element={<h1>Home Page</h1>} />
          <Route path="/" element={<DoctorLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
