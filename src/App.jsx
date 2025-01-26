import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card/Card";
import { BsDisplay } from "react-icons/bs";
import {DemoCarousel} from "./carousel";
import ScrollImage from "./components/ScrollImage";

function App() {
  const [count, setCount] = useState(0);
  const styleButton = {fontFamily: "Rubik",
    marginTop:"12rem"
  }
  return (
    <>
      
      <NavBar />
      <main style={{    display: 'flex' ,flexDirection: 'column', height:'auto'}}>
        {/*<DemoCarousel />*/}
      
        <ScrollImage />
{/*
        <div className="cardContainer">
          
          <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
          <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
          <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
          <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
          <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
          <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>
          <Card precio={'452'} titulo={'Ipa'} size={'100px'} imagen={'/Cerveza54.png'}/>

        </div>
*/}
        {<DemoCarousel />}
        <div className="productContainer">

          <div className="leftContainer">             
            <img  className="imgContainer zoomable"  src={'/Cerveza54.png'} alt="producto"/>
            <div>
              <p>Apa</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est esse reprehenderit quae delectus, ad fuga be
                atae eius repudiandae autem nostrum quaerat quisquam ducimus adipisci eligendi fugiat. Porro, maiores sequi?
              </p>
            </div>
          </div>

          <div className="rightContainer">
            <img  className="imgContainer zoomable"  src={'/Cerveza54.png'} alt="producto" />
            <div>
              <p>Apa</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est esse reprehenderit quae delectus, ad fuga be
                atae eius repudiandae autem nostrum quaerat quisquam ducimus adipisci eligendi fugiat. Porro, maiores sequi?
              </p>
            </div>
          </div>

          <div className="leftContainer">
            <img className="imgContainer zoomable"  src={'/Cerveza54.png'} alt="producto"  />
            <div>
              <p>Apa</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est esse reprehenderit quae delectus, ad fuga be
                atae eius repudiandae autem nostrum quaerat quisquam ducimus adipisci eligendi fugiat. Porro, maiores sequi?
              </p>
            </div>
          </div>

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
