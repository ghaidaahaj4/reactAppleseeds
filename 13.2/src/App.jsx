import React, { useState, useEffect } from "react";
import "./App.css";

function Box({ size }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const slideInTimer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      clearTimeout(slideInTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    visible && <div className="box" style={{ width: size, height: size }} />
  );
}

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    const sizes = ["50px", "100px", "150px"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    setBoxes([...boxes, randomSize]);
  };

  return (
    <div className="App">
      <button onClick={addBox}>Add Box</button>
      <div className="box-container">
        {boxes.map((size, index) => (
          <Box key={index} size={size} />
        ))}
      </div>
    </div>
  );
}

export default App;
