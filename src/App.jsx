import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card/Card";
import { BsDisplay } from "react-icons/bs";




function App() {
  const [count, setCount] = useState(0);
  const styleButton = {fontFamily: "Rubik",
    marginTop:"12rem"
  }
  return (
    <>
      <header style={{backgroundColor:"grey"}}>
        <NavBar />
      </header>
      <main style={{display:"Block", }}>
          <div className="cardContainer">
            <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
            <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
            <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
            <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
            <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
            <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
            <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
          </div>
      </main>
      <footer style={{display:"Block"}}>
        <div style={{}} >
          <p>Direccion</p>
          <p>contacto</p>
          <p>telefono</p>
          <p>facebook</p>
        </div>
        <div>
          <p>pepito</p>
        </div>
      </footer>

    </>
  );
}

export default App;
