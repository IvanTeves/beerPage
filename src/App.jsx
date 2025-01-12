import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Item } from "./components/item/item";







function App() {
  const [count, setCount] = useState(0);
  const styleButton = {fontFamily: "Rubik",
    marginTop:"12rem"
  }
  return (
    <>
      <div>
        <NavBar />
        <div>
        <Item/>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Ivo se vienen cosas grosas</h1>
        <div className="card">
          <button style = {styleButton} onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        </div>
      </div>

    </>
  );
}

export default App;
