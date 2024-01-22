// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from "./Components/AllPlayers";
import SinglePlayer from "./Components/SinglePlayer";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container"> {}
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;