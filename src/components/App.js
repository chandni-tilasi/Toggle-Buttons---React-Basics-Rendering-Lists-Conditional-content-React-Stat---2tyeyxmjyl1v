import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  //code here

  const [on, seton] = useState(false);
  const [off, setoff] = useState(false);

  function handleClick() {
    seton(!on);
    setoff(!off);
  }

  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {/* assign value for button 1 */}
        {on ? "ON" : "OFF"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {off ? "OFF" : "ON"}
      </button>
    </div>
  );
};

export default App;
