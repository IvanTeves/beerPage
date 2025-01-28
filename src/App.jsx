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
        <h3 className="productTitle">Nuestros productos</h3>
        <div className="productContainer">

          <div className="leftContainer">             
            <img  className="imgContainer zoomable"  src={'copia.png'} alt="producto"/>
            <div>
              <p className="titleParraLeft">Golden Ale</p>
              <div className="amargoFlexLeft">
                <p>Amargor</p>
                <div class="circle-container">
                  <div class="circlePintado"></div>
                  <div class="circlePintado"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </div>
              <p className="leftAbv">ABV: 5%</p>
              <p className="parraLeft">
                Delicada cerveza de intenso, profundo y cristalino color dorado,
                de leve amargor y con inmenso poder para quitar la sed. Una sutil espuma blanca y compacta acompaña desde el primer trago hasta el ultimo sorbo.
                Ideal para acompañar unas buenas papas fritas.
              </p>
            </div>
          </div>

          <div className="rightContainer">
            <img  className="imgContainer zoomable"  src={'copia.png'} alt="producto" />
            <div>
              <p className="titleParraRight">Honey</p>
              <div className="amargoFlexRight">
                <p>Amargor</p>
                <div class="circle-container">
                  <div class="circlePintado"></div>
                  <div class="circlePintado"></div>
                  <div class="circlePintado"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </div>
              <p className="leftAbv">ABV: 5%</p>
              <p className="parraRight">
                Delicada cerveza de profundo color dorado, de leve dulzura y extrema suavidad en boca,
                otorgada por la adicion de miel pura de abejas cuidadosamente seleccionada. 
                Ideal para acompañar comidas agridulces o unas costillas de cerdo con salsa barbacoa.
              </p>
            </div>
          </div>

          <div className="leftContainer">
            <img className="imgContainer zoomable"  src={'copia.png'} alt="producto"  />
            <div>
              <p className="titleParraLeft">American Amber Ale</p>
              <div className="amargoFlexLeft">
                <p>Amargor</p>
                <div class="circle-container">
                  <div class="circlePintado"></div>
                  <div class="circlePintado"></div>
                  <div class="circlePintado"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </div>
              <p className="leftAbv">ABV: 5%</p>
              <p className="parraLeft">
                Cerveza color cobrizo con notas caramelizadas,
                de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma. 
                Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas
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
