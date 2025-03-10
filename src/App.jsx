import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card/Card";
import { BsDisplay } from "react-icons/bs";
import {ImgBanner} from "./carousel";
import ScrollImage from "./components/ScrollImage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuHamburguesa } from "./components/menuHamburguesa";
import { initMercadoPago } from '@mercadopago/sdk-react'
import {ProductPopUp} from './components/ContenedorServicios/ProductPopUp.jsx';
import { NuestraHistoria } from "./components/NuestraHistoria/NuestraHistoria.jsx";
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
  
    const containers = document.querySelectorAll(".rightContainer1, .leftContainer1 , .leftContainer , .rightContainer , .imgNosotros,.NuestraHistoriaDiv");
  
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
        <ImgBanner />
        <h3 id="Productos"className="productTitle">Nuestros productos</h3>
        <div className="productContainer">

          <Card
            titulo="FIEBRE DE VERANO"
            fondo="/etiqueta.webp"
            imgCerveza="cervezaFondosinBlanco.webp"
            parra_1="Cerveza color cobrizo con notas caramelizadas,
                  de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma. "
            parra_2="Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas"
            alcohol="5%"
            circulosPintados={2}
            direccion="leftContainer1"
          />
          <Card
            titulo="RED IPA"
            fondo="/redipa.webp"
            imgCerveza="cervezaRedIpa.webp"
            parra_1="Cerveza recargada de lúpulos americanos, con un intenso color rojizo brindado por las maltas tostadas. 
                          Perfil aromático cítrico y resinoso. "
            parra_2="De cuerpo medio. Moderamente amarga, por el balance de la dulzura de las maltas, y con dejo de frutas tropicales aportado por los lúpulos."
            alcohol="6%"
            circulosPintados={3}
            direccion="rightContainer1"
            backgroundPosition="center 0px"
          />
          <Card
            titulo="WEST COAST IPA"
            fondo="/California.webp"
            imgCerveza="cervezaCalle2.webp"
            parra_1="Cerveza color cobrizo con notas caramelizadas,
                    de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma."
            parra_2="Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas"
            alcohol="5%"
            circulosPintados={4}
            direccion="leftContainer1"
          />

          <Card
            titulo="AMERICAN PALE ALE"
            fondo="/SantadiablaAPAfinal.jpg"
            imgCerveza="cervezaHell.webp"
            parra_1="Cerveza color cobrizo con notas caramelizadas,
                    de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma."
            parra_2="Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas"
            alcohol="5%"
            circulosPintados={5}
            direccion="rightContainer1"
          />

          <Card
            titulo="GOLDEN ALE"
            fondo="/Golden.webp"
            imgCerveza="cervezaGolden.webp"
            parra_1="Delicada cerveza de intenso, profundo y cristalino color dorado, de leve amargor y con inmenso poder para quitar la sed.  "
            parra_2="Una sutil espuma blanca y compacta acompaña desde el primer trago hasta el ultimo sorbo. Ideal para acompañar unas buenas papas fritas."
            alcohol="5%"
            circulosPintados={2}
            direccion="leftContainer1"
          />


          <Card
            titulo="PORTER"
            fondo="/Porter.webp"
            imgCerveza="cervezaPorter.webp"
            parra_1="Robusta cerveza negra de gran carácter, con notas que recuerdan al café y al chocolate."
            parra_2=" Un amargor moderado equilibra su maltoso y sedoso cuerpo que trae consigo una inmejorable espuma. Ideal para acompañar un buen corte de carne vacuna o de cerdo."
            alcohol="6%"
            circulosPintados={3}
            direccion="rightContainer1"
          />

          <Card
            titulo="AMERICAN IPA"
            fondo="/IPA.webp"
            imgCerveza="cervezaAmericanIpa2.webp"
            parra_1="Impactante cerveza de color dorado, de intenso y sabroso amargor que dejan detrás del mismo delicados sabores cítricos, frutales y resinosos."
            parra_2=" La gran adición de lúpulos genera un aroma inconfundible del estilo y una espuma realmente consistente. Ideal para acompañar comidas picantes."
            alcohol="6%"
            circulosPintados={6}
            direccion="leftContainer1"
          />

          <Card
            titulo="SWEETBERRIES"
            fondo="/SB.webp"
            imgCerveza="cervezaSweetBe.webp"
            parra_1=" Intrépida cerveza de color rubí con gran sabor a dulces frutos rojos. Ideal para degustar con algun postre frutal. "
            alcohol="5%"
            circulosPintados={2}
            direccion="rightContainer1"
          />
          
          <Card
            titulo="AMERICAN AMBER ALE"
            fondo="/AAA.webp"
            imgCerveza="cervezasAAA.webp"
            parra_1=" Cerveza color cobrizo con notas caramelizadas, de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma. "
            parra_2="Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas"
            alcohol="5%"
            circulosPintados={3}
            direccion="leftContainer1"
          />
          <Card
            titulo="HONEY"
            fondo="/Honey.webp"
            imgCerveza="cervezaHoney.webp"
            parra_1=" Delicada cerveza de profundo color dorado, de leve dulzura y extrema suavidad en boca, otorgada por la adicion de miel pura de abejas cuidadosamente seleccionada. "
            parra_2="Ideal para acompañar comidas agridulces o unas costillas de cerdo con salsa barbacoa."
            alcohol="5%"
            circulosPintados={1}
            direccion="rightContainer1"
          />
          <Card
            titulo="DARK HONEY"
            fondo="/DarkHoneyFondo.webp"
            imgCerveza="darkHoney.webp"
            parra_1=" Cerveza negra de gran sabor y cuerpo, en la cual se emparejan de forma maravillosa el delicoso gusto a chocolate con la suavidad y dulzura de la miel pura de abejas. Ideal para acompañar postres como ser un tiramisú."
            alcohol="6%"
            circulosPintados={3}
            direccion="leftContainer1"
          />


        </div>
        <h3 id="Servicios"className="productTitle">Servicios</h3>
          
        <ProductPopUp/>
        

        <h3 id="Nuestros"className="productTitle">Confían en nosotros</h3>
        <div className="divClientes">
          <img className = "imgCliente" src="./lasbirrasdejuan.webp" alt="" />
          <img className = "imgCliente" src="/N40.webp" alt="" />
          <img className = "imgCliente" src="/GROWLER.webp" alt="" />
          <img className = "imgCliente" src="/borussia.webp" alt="" />
          <img className = "imgCliente" src="/bar46.webp" alt="" />
          <img className = "imgCliente" src="/refugio.webp" alt="" />
        </div>

        <h3 id="Sobre" className="productTitle">Nuestra Historia</h3>
        <NuestraHistoria
          parra_1="Nace de la unión de dos grandes amigos, casi hermanos, que comparten una gran pasión y admiración por la cerveza artesanal. "
          parra_2="Sus pilares fundamentales son el trabajo en equipo, el respeto, la dedicación y la atención hacia calidad de sus productos y el trato con sus clientes y consumidores."
          parra_3="Los productos son elaborados en su planta productiva, ubicada en la ciudad de Rosario, donde cada paso es realizado y controlado de forma personal. "
          parra_4="La cerveza es realmente artesanal, cada estilo parte de una única e inigualable receta. Todas nuestras materias primas son cuidadosamente seleccionadas y manipuladas. "
          parra_5 = "Como cervecería nos enorgullece poder lograr cervezas únicas, totalmente libre de conservantes, que despiertan de forma agradable todos los sentidos al ser bebida. "
          parra_6 = "¡Salud!"        
        />


        <a href="https://api.whatsapp.com/send?phone=5493412754782&text=%27Hola,%20quiero%20mas%20informacion%20sobre%20las%20birritas%22" target="_blank" rel="noopener noreferrer" className="floating-icon">
          <img src="/wsp.webp" alt="Icono fijo" className="floating-icon-img" />
        </a>
      </main>
      <footer className="footer">
        <div  className="footerDiv">
          <img className="footerDivImg" src="logoHeader.webp" alt="" />
          <p className="footerDir">Dirección: Mitre 4079, Rosario, Santa Fe, Argentina</p>
          <div className="footerDivIcons">
            <a href="https://api.whatsapp.com/send?phone=5493412754782&text=%27Hola,%20quiero%20mas%20informacion%20sobre%20las%20birritas%22" className="iconosFooter">
                <img src="/wspFooter.webp" alt="" />
            </a>
            <a href="https://www.instagram.com/cerveceriasantadiabla?igsh=MWljZHdvYXYyMHhyNQ==" className="iconosFooter">
                <img src="/instaFooter.webp" alt="" />
            </a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;

/*

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
*/