import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FavoriteColor from "./FavoriteColor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FavoriteColor />
    </>
  );
}

export default App;
