import React from "react";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Interests from "./pages/Interests";
import University from "./pages/University";
import Memories from "./pages/Memories";
import Charts from "./pages/Charts";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/academics" element={ <Academics /> } />
          <Route path="/interests" element={ <Interests /> } />
          <Route path="/university" element={ <University /> } />
          <Route path="/memories" element={ <Memories /> } />
          <Route path="/charts" element={ <Charts /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
