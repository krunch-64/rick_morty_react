import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Single from '../pages/Single';
import '../styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/details/:id" element={<Single />} />
      {/* path="*" fonction si jamais l'url ne correspond à rien de céclaré au dessus  */}
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

