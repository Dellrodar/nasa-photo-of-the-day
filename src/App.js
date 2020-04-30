import React, { useState } from "react";
import "./App.css";
import GetAPODData from "./components/Content/content";
import HeaderImage from "./components/Header/HeaderImage";
import HeaderTitle from "./components/Header/HeaderTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="App">
      <header>
        <HeaderImage />
        <HeaderTitle />
        <div className="datePicker">
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            maxDate={new Date()}
          />
        </div>
      </header>
      <div>
        <GetAPODData date={date} />
      </div>
    </div>
  );
}

export default App;
