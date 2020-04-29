import React from "react";
import "./App.css";
import GetAPODData from "./components/content";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Astronomy Picture of the Day</h1>
      </header>
      <GetAPODData />
    </div>
  );
}

export default App;
