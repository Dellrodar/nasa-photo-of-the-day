import React from "react";
import "./App.css";
import GetAPODData from "./components/Content/content";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <GetAPODData />
    </div>
  );
}

export default App;
