import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card/Card";
import { BsDisplay } from "react-icons/bs";
import {DemoCarousel} from "./carousel";
import ScrollImage from "./components/ScrollImage";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si el elemento es visible, añade la clase 'show'
            entry.target.classList.add("show");
          } else {
            // Si el elemento deja de ser visible, elimina la clase 'show'
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.25 } // Umbral del 10%
    );

    const leftElements = document.querySelectorAll(".leftContainer");
    const rightElements = document.querySelectorAll(".rightContainer");

    // Observamos los elementos
    leftElements.forEach((el) => observer.observe(el));
    rightElements.forEach((el) => observer.observe(el));

    // Cleanup para evitar fugas de memoria
    return () => {
      leftElements.forEach((el) => observer.unobserve(el));
      rightElements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  return (
    <>
      
      <NavBar />
      <main style={{    display: 'flex' ,flexDirection: 'column', height:'auto'}}>
        {/*<DemoCarousel />*/}
      
       {/* <ScrollImage />*/}
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
            <img  className="imgContainer zoomable"  src={'copia.png'} alt="producto"/>
            <div>
              <p className="titleParraLeft">Apa</p>
              <p className="parraLeft">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est esse reprehenderit quae delectus, ad fuga be
                atae eius repudiandae autem nostrum quaerat quisquam ducimus adipisci eligendi fugiat. Porro, maiores sequi?
              </p>
            </div>
          </div>

          <div className="rightContainer">
            <img  className="imgContainer zoomable"  src={'copia.png'} alt="producto" />
            <div>
              <p className="titleParraRight">Apa</p>
              <p className="parraRight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est esse reprehenderit quae delectus, ad fuga be
                atae eius repudiandae autem nostrum quaerat quisquam ducimus adipisci eligendi fugiat. Porro, maiores sequi?
              </p>
            </div>
          </div>

          <div className="leftContainer">
            <img className="imgContainer zoomable"  src={'copia.png'} alt="producto"  />
            <div>
              <p className="titleParraLeft">Apa</p>
              <p className="parraLeft">
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
