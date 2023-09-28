import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Textarea />
      </div>
    </React.Fragment>
  );
}

export default App;
