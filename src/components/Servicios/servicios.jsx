
import {useEffect,useRef } from "react";
import Swal from "sweetalert2";

export const Servicios = () => {
    const serviciosRef = useRef(null);
  
    // Agregar los estilos solo una vez
    useEffect(() => {
      const style = document.createElement("style");
      style.innerHTML = `
        .swal2-image {
          width: 35vh;  /* Ocupará el 40% del ancho de la pantalla */
          height: 70vh; /* Mantendrá la proporción */
          max-width: 400px; /* No será más grande de 400px */
        }
  
        @media (max-width: 768px) {
          .swal2-image {
          width: 35vh;  /* Ocupará el 40% del ancho de la pantalla */
          height: 70vh;
          }
        }
  
        @media (max-width: 480px) {
          .swal2-image {
          width: 35vh;  /* Ocupará el 40% del ancho de la pantalla */
          height: 70vh;
          }
        }
      `;
      document.head.appendChild(style);
  
      // Limpiar cuando el componente se desmonte
      return () => {
        document.head.removeChild(style);
      };
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            Swal.fire({
              title: "Bienvenido a Servicios",
              text: "Aquí te mostramos nuestros mejores servicios.",
              imageUrl: "/serviciosFondo.jpeg",
              confirmButtonText: "¡Entendido!",
            });
            observer.disconnect(); // Para que no se vuelva a ejecutar cada vez que haga scroll
          }
        },
        { threshold: 0.2 } // 50% de la sección debe estar visible
      );
  
      if (serviciosRef.current) {
        observer.observe(serviciosRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  

    return (
        <div className="productContainer" ref={serviciosRef} >

          <div className="leftContainer" style={{backgroundImage:'url(/logoDiablaFondo.png)',  backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                    backgroundBlendMode: "multiply",backgroundColor: "rgba(0, 0, 0, 0.586)"}}>
                <img src="/barrilAzul2.png" className="imgContainer zoomable" alt="" />
                <div style={{backgroundColor:"black"}}>
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
          <div className="rightContainer" style={{backgroundImage:'url(/logoDiablaFondo.png)',  backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                    backgroundBlendMode: "multiply",backgroundColor: "rgba(0, 0, 0, 0.586)"}}>
                <img src="/barrilAzul2.png" className="imgContainer zoomable" alt="" />
                <div style={{backgroundColor:"black"}}>
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
    )
}

