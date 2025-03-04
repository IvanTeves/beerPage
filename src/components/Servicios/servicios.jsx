
import {useState,useEffect,useRef } from "react";
import Swal from "sweetalert2";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

export const Servicios = () => {
    const serviciosRef = useRef(null);
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
    const [expanded, setExpanded] = useState(false);
    
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 480);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        }, []);

        const toggleExpand = () => {
        setExpanded(!expanded); // Cambia el estado al contrario
    };

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            Swal.fire({
                title: 'Nuestros Servicios',
                text: 'Aquí te mostramos nuestros mejores servicios.',
                imageUrl: '/serviciosFondo.jpeg',
                imageAlt: 'Imagen de servicios',
                confirmButtonText: '¡Entendido!',
                customClass: {
                    popup: 'my-popup', // Clase para el contenedor del pop-up
                    title: 'my-title', // Clase para el título
                    confirmButton: 'my-confirm-button', // Clase para el botón de confirmación
                    image: 'my-image' // Clase para la imagen
                }
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
                <div className="divServicios">
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
                <div 
                    onClick={toggleExpand} 
                >
                    {expanded ?  <FiMinusCircle className="plus"/> : <FiPlusCircle className="plus"/>}
                </div>  
          </div>
          
          <div className="rightContainer" style={{backgroundImage:'url(/logoDiablaFondo.png)',  backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                    backgroundBlendMode: "multiply",backgroundColor: "rgba(0, 0, 0, 0.586)"}}>
                <img src="/Puesto.jpeg" style={{margin:'3vw'}} className="imgContainerPuesto zoomable" alt="" />
                <div className="divServicios" >
                  <p className="titleParraLeft">Presencias en eventos</p>
                  <p className="parraLeft" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,

                    }}>
                  En Santa Diabla, nos especializamos en llevar la mejor cerveza artesanal directamente a tu evento, brindando una experiencia única para todos tus invitados. 
                  </p>
                 <p className="parraLeft" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,

                 }}>
                    Ya sea una fiesta privada, una boda, un festival o un evento corporativo, nuestra presencia garantiza que el sabor de nuestras cervezas premium transforme cualquier ocasión en un momento memorable.
                 </p>
               </div>
          </div>
        </div>
    )
}

