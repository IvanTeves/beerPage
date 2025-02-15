import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card/Card";
import { BsDisplay } from "react-icons/bs";
import {DemoCarousel} from "./carousel";
import ScrollImage from "./components/ScrollImage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuHamburguesa } from "./components/menuHamburguesa";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
  
            // Verifica si hay círculos dentro del contenedor
            const circles = entry.target.querySelectorAll(".circle, .circlePintado");
            circles.forEach((circle, index) => {
              setTimeout(() => {
                console.log(`Mostrando círculo ${index}`); // Debug
                circle.classList.add("show");
              }, index * 300); // Efecto progresivo
            });
  
          } else {
            entry.target.classList.remove("show");
  
            // Oculta los círculos cuando el contenedor desaparece
            const circles = entry.target.querySelectorAll(".circle, .circlePintado");
            circles.forEach((circle) => {
              circle.classList.remove("show");
            });
          }
        });
      },
      { threshold: 0.25 }
    );
  
    const containers = document.querySelectorAll(".leftContainer, .rightContainer");
  
    containers.forEach((el) => observer.observe(el));
  
    return () => {
      containers.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <>
      <header className="header">
        <NavBar />

      </header>
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
        <h3 id="Productos"className="productTitle">Nuestros productos</h3>
        <div className="productContainer">

          <div className="leftContainer">             
            <img  className="imgContainer zoomable"  src={'copia.png'} alt="producto"/>
            <div>
              <p className="titleParraLeft">Golden Ale</p>
              <div className="amargoFlexLeft">
                <p>Amargor</p>
                <div class="circle-container">
                  <div class="circlePintado">
                     <img className="circlePintado" src="./lupulo.png" alt="" />
                  </div>
                  <div class="circlePintado">
                     <img className="circlePintado" src="./lupulo.png" alt="" />
                  </div>
                  <div class="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
                  <div class="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
                  <div class="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
                  <div class="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
                  <div class="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
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
                  <div class="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div class="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div class="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div class="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div class="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div class="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div class="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
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
                    <div class="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div class="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div class="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div class="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div class="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div class="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div class="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
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

        <h3 id="Servicios"className="productTitle">Servicios</h3>
        <div className="barriles">
              <img src="/barril.png" alt="" />
        </div>

        <h3 id="Nuestros"className="productTitle">Nuestros Clientes</h3>
        <div className="divClientes">
          <img src="./lasbirrasdejuan.png" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <h3 id="Sobre" className="productTitle">Nuestra Historia</h3>
        <div className="divClientes">
          <img src="./lasbirrasdejuan.png" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <a href="https://api.whatsapp.com/send?phone=5493412754782&text=%27Hola,%20quiero%20mas%20informacion%20sobre%20las%20birritas%22" target="_blank" rel="noopener noreferrer" className="floating-icon">
          <img src="/wsp.png" alt="Icono fijo" className="floating-icon-img" />
        </a>
      </main>
      <footer className="footer">
        <div  className="footerDiv">
          <img className="footerDivImg" src="banner.png" alt="" />
          <p className="footerDir">Dirección: Mitre 4079, Rosario, Santa Fe, Argentina</p>
          <div className="footerDivIcons">
            <a href="https://api.whatsapp.com/send?phone=5493412754782&text=%27Hola,%20quiero%20mas%20informacion%20sobre%20las%20birritas%22" className="iconosFooter">
                <img src="/wspFooter.png" alt="" />
            </a>
            <a href="https://www.instagram.com/cerveceriasantadiabla?igsh=MWljZHdvYXYyMHhyNQ==" className="iconosFooter">
                <img src="/instaFooter.png" alt="" />
            </a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;
