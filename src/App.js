import React from "react";
import "./App.css";

function App() {
  const [color, setColor] = React.useState("white");

  return (
    <React.Fragment>
      <div className="heading-container">
        <div className="heading">What color</div>
        <div className="heading">do you want</div>
        <div className="heading">the box to be?</div>
      </div>

      <div className="button-container">
        <button className="button orange" onClick={() => setColor("orange")}>
          Orange
        </button>
        <button className="button aqua" onClick={() => setColor("aqua")}>
          Aqua
        </button>
        <button className="button khaki" onClick={() => setColor("khaki")}>
          Khaki
        </button>
        <button className="button tomato" onClick={() => setColor("tomato")}>
          Tomato
        </button>
        <button className="button skyblue" onClick={() => setColor("skyblue")}>
          Skyblue
        </button>
        <button className="button hotpink" onClick={() => setColor("hotpink")}>
          Hotpink
        </button>
      </div>

      <div className="colored-box-container">
        <div className="colored-box" style={{ backgroundColor: color }} />
      </div>
    </React.Fragment>
  );
}

export default App;
