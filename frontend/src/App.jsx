import React from "react";
import { Button } from "./components/ui/button";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard_homePage from "./pages/dashboard/Dashboard_homePage";
import KnowledgePage from "./pages/dashboard/KnowledgePage";
import SectionsPage from "./pages/dashboard/SectionsPage";
import Chatbot from "./pages/dashboard/Chatbot";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard_homePage />} />
        <Route path="/dashboard/knowledge" element={<KnowledgePage />} />
        <Route path="/dashboard/sections" element={<SectionsPage />} />
        <Route path="/dashboard/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
