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
import { initMercadoPago } from '@mercadopago/sdk-react'
/*import { renderPaymentBrick } from "./components/Bricks/bricks";*/     
/*import { Payment } from '@mercadopago/sdk-react';*/ 
/*initMercadoPago('TEST-9c9836ce-88d9-41e9-8678-f02800855eac');*/ 
/*const bricksBuilder = mp.bricks();*/
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
  
    const containers = document.querySelectorAll(".leftContainer1 , .leftContainer , .rightContainer");
  
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
        <div className="leftContainer1">   
            <div className="producto4">
              <div className="texto-vertical"> SANTA DIABLA </div>
              <div className="medio">
                  <div className="divLinea">
                      <p className="title"> WEST COAST IPA</p>
                      <div className="linea"></div>   
                  </div>

                  <div className="amargoFlexRight" style={{marginBottom:'15vh',paddingLeft:'1vw'}}>
                    <p>Amargor</p>
                    <div className="circle-container">
                      <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                    </div>
                  </div>
                <p className="leftAbv" style={{paddingLeft:'1vw', textAlign:'left'}}>ABV: 5%</p>
                <p style={{paddingLeft:'1vw',paddingRight:'1vw', textAlign:'left'}}>Cerveza color cobrizo con notas caramelizadas,
                  de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma. 
                </p>
                <p style={{padding:'1vw', textAlign:'left'}}>  Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas</p>
              </div>
              <img className="img" src="cervezaCalle2.png" alt=""/>
            </div>
          </div>

          <div className="leftContainer1">   
            <div className="producto">
              <div className="texto-vertical"> SANTA DIABLA </div>
              <div className="medio">
                  <div className="divLinea">
                      <p className="title"> FIEBRE DE VERANO</p>
                      <div className="linea"></div>   
                  </div>

                  <div className="amargoFlexRight" style={{marginBottom:'15vh',paddingLeft:'1vw'}}>
                    <p>Amargor</p>
                    <div className="circle-container">
                      <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                    </div>
                  </div>
                <p className="leftAbv" style={{paddingLeft:'1vw', textAlign:'left'}}>ABV: 5%</p>
                <p style={{paddingLeft:'1vw',paddingRight:'1vw', textAlign:'left'}}>Cerveza color cobrizo con notas caramelizadas,
                  de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma. 
                </p>
                <p style={{padding:'1vw', textAlign:'left'}}>  Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas</p>
              </div>
              <img className="img" src="cervezaFondosinBlanco.png" alt=""/>
            </div>
          </div>

          <div className="leftContainer1">   
            <div className="producto1">
              <div className="texto-vertical"> SANTA DIABLA </div>
              <div className="medio">
                  <div className="divLinea">
                      <p className="title"> AMERICAN PALE ALE</p>
                      <div className="linea"></div>   
                  </div>

                  <div className="amargoFlexRight" style={{marginBottom:'15vh',paddingLeft:'1vw'}}>
                    <p>Amargor</p>
                    <div className="circle-container">
                      <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                    </div>
                  </div>
                <p className="leftAbv" style={{paddingLeft:'1vw', textAlign:'left'}}>ABV: 5%</p>
                <p style={{paddingLeft:'1vw',paddingRight:'1vw', textAlign:'left'}}>Cerveza color cobrizo con notas caramelizadas,
                  de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma. 
                </p>
                <p style={{padding:'1vw', textAlign:'left'}}>  Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas</p>
              </div>
              <img className="img" src="cervezaHell.png" alt=""/>
            </div>
          </div>
          <div className="leftContainer1">   
            <div className="producto2">
              <div className="texto-vertical"> SANTA DIABLA </div>
              <div className="medio">
                  <div className="divLinea">
                      <p className="title"> GOLDEN</p>
                      <div className="linea"></div>   
                  </div>

                  <div className="amargoFlexRight" style={{marginBottom:'15vh',marginLeft:'1vw'}}>
                    <p>Amargor</p>
                    <div className="circle-container">
                      <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circlePintado">
                          <img className="circlePintado" src="./lupulo.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                        <div className="circle">
                          <img className="circle" src="./lupulovacio.png" alt="" />
                        </div>
                    </div>
                  </div>

                <p className="leftAbv" style={{paddingLeft:'1vw', textAlign:'left'}}>ABV: 5%</p>
                <p style={{paddingLeft:'1vw',paddingRight:'1vw', textAlign:'left'}}>Cerveza color cobrizo con notas caramelizadas,
                  de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma. 
                </p>
                <p style={{padding:'1vw', textAlign:'left'}}>  Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas</p>
              </div>
              <img className="img" src="cervezaHoney.png" alt=""/>
            </div>
          </div>



          
          <div className="leftContainer">             
            <img  className="imgContainer zoomable"  src={'cervezaPorter.png'} alt="producto"/>
            <div>
              <p className="titleParraLeft">Porter</p>
              <div className="amargoFlexLeft">
                <p>Amargor</p>
                <div className="circle-container">
                  <div className="circlePintado">
                     <img className="circlePintado" src="./lupulo.png" alt="" />
                  </div>
                  <div className="circlePintado">
                     <img className="circlePintado" src="./lupulo.png" alt="" />
                  </div>
                  <div className="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
                  <div className="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
                  <div className="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
                  <div className="circle">
                    <img className="circle" src="./lupulovacio.png" alt="" />
                  </div>
                  <div className="circle">
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
            <img  className="imgContainer zoomable"  src={'cervezaAmericanIpa2.png'} alt="producto" />
            <div>
              <p className="titleparraRight">American IPA</p>
              <img className="underlineDiabla " src="underline.svg" alt="" />
              <div className="amargoFlexRight">
                <p>Amargor</p>
                <div className="circle-container">
                  <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
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
            <img className="imgContainer zoomable"  src={'cervezaSweetBe.png'} alt="producto"  />
            <div>
              <p className="titleParraLeft">Sweetberries</p>
              <div className="amargoFlexLeft">
                <p>Amargor</p>
                <div className="circle-container">
                    <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
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
        
          <div className="rightContainer">
              <img  className="imgContainer zoomable"  src={'cervezaHoney.png'} alt="producto" />
              <div>
                <p className="titleparraRight">Honey</p>
                <div className="amargoFlexRight">
                  <p>Amargor</p>
                  <div className="circle-container">
                    <div className="circlePintado">
                        <img className="circlePintado" src="./lupulo.png" alt="" />
                      </div>
                      <div className="circlePintado">
                        <img className="circlePintado" src="./lupulo.png" alt="" />
                      </div>
                      <div className="circlePintado">
                        <img className="circlePintado" src="./lupulo.png" alt="" />
                      </div>
                      <div className="circle">
                        <img className="circle" src="./lupulovacio.png" alt="" />
                      </div>
                      <div className="circle">
                        <img className="circle" src="./lupulovacio.png" alt="" />
                      </div>
                      <div className="circle">
                        <img className="circle" src="./lupulovacio.png" alt="" />
                      </div>
                      <div className="circle">
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
            <img className="imgContainer zoomable"  src={'cervezasAAA.png'} alt="producto"  />
            <div>
              <p className="titleParraLeft">American Amber Ale</p>
              <div className="amargoFlexLeft">
                <p>Amargor</p>
                <div className="circle-container">
                    <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circlePintado">
                      <img className="circlePintado" src="./lupulo.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
                      <img className="circle" src="./lupulovacio.png" alt="" />
                    </div>
                    <div className="circle">
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
        <div className="productContainer">
          <div className="leftContainer">
                <img src="/barrilAzul2.png" className="imgContainer zoomable" alt="" />
                <div>
                  <p className="titleParraLeft">Alquiler de barriles</p>
                  <p className="parraLeft">
                     Ofrecemos un servicio de alquiler de barriles diseñado especialmente para bares que buscan ampliar su oferta de cervezas sin necesidad de comprometerse con grandes volúmenes de compra.
                </p>
                 <p className="parraLeft">
                    Contamos con una variedad de estilos y tamaños de barriles, adaptándonos a las necesidades de cada establecimiento. Además, el servicio puede incluir equipos de dispensado y asistencia técnica para garantizar un óptimo funcionamiento.
                 </p>
                 <p className="parraLeft">
                    Esta opción permite a los bares ofrecer cervezas rotativas, probar nuevas marcas o cubrir demandas específicas en eventos y temporadas especiales.
                 </p>
               </div>
          </div>
        </div>

        <h3 id="Nuestros"className="productTitle">Nuestros Clientes</h3>
        <div className="divClientes">
          <img src="./lasbirrasdejuan.png" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <h3 id="Sobre" className="productTitle">Nuestra Historia</h3>
        <div className="productContainer">
           <div className="rightContainer" style={{height:'100%'}}>
                <img  className="imgContainer zoomable"  src={'logodiabla1.png'} alt="producto" />
                <div>
                  <p className="titleparraRight" style={{textAlign:'center'}}>Cervecería Santa Diabla</p>
                    <p className="parraRight" style={{marginBottom:'0.5vh'}}>
                      Cervecería Santa Diabla nace de la unión de dos grandes amigos, casi hermanos, que comparten una gran pasión y admiración por la cerveza artesanal. 
                    </p>
                    <p className="parraRight" style={{marginBottom:'0.5vh'}}>
                      Sus pilares fundamentales son el trabajo en equipo, el respeto, la dedicación y la atención hacia calidad de sus productos y el trato con sus clientes y consumidores.
                    </p>
                    <p className="parraRight" style={{marginBottom:'0.5vh'}}>
                      Los productos son elaborados en su planta productiva, ubicada en la ciudad de Rosario, donde cada paso es realizado y controlado de forma personal. 
                    </p>
                    <p className="parraRight" style={{marginBottom:'0.5vh'}}>
                    La cerveza es realmente artesanal, cada estilo parte de una única e inigualable receta. Todas nuestras materias primas son cuidadosamente seleccionadas y manipuladas. 
                    </p>
                    <p className="parraRight" style={{marginBottom:'0.5vh'}}>
                    Como cervecería nos enorgullece poder lograr cervezas únicas, totalmente libre de conservantes, que despiertan de forma agradable todos los sentidos al ser bebida. 
                    </p>
                    <p> Salud!</p>
                  
                </div>
            </div>
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
