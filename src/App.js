import React from "react";
import "./styles.css";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";

export default function App() {
  return (
    <div className="App">
      <div className="Pokedex-header">
        <h1 className="header">Pokedex</h1>
        <h2 className="caption">The Source</h2>
      </div>
      <Pokegame />
    </div>
  );
}
