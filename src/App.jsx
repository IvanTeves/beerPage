import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card/Card";
import { BsDisplay } from "react-icons/bs";
import {DemoCarousel} from "./carousel";



function App() {
  const [count, setCount] = useState(0);
  const styleButton = {fontFamily: "Rubik",
    marginTop:"12rem"
  }
  return (
    <>
      <NavBar />
      <main style={{    display: 'flex' ,flexDirection: 'column', height:'140vh'}}>
        <DemoCarousel />
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
      <footer className="footer">
        <div  >
          <p>Direccion</p>
          <p>contacto</p>
          <p>telefono</p>
          <p>facebook</p>
        </div>
      </footer>

    </>
  );
}

export default App;
