import React from "react";
import "./App.css";
import GetAPODData from "./components/content";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <GetAPODData />
    </div>
  );
}

export default App;
