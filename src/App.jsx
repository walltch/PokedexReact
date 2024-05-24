import React, { useState, useEffect } from "react";
import NavBar from './components/common/NavBar';
import Pokemon from './Views/Pokemon';

function App() {
  return (
    <div>
      <NavBar />
      <Pokemon />
    </div>
  );
}

export default App;