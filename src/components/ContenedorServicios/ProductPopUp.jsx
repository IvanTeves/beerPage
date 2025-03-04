
import {useState,useEffect,useRef } from "react";
import Swal from "sweetalert2";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { Servicios } from "../Servicios/servicios";

export const ProductPopUp = () => {
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
          
            <Servicios            
                        titulo="Alquiler de barriles"
                        img="barrilAzul2.png"
                        parra_1="El alquiler de barriles de cerveza es la opción perfecta para bares, restaurantes y organizadores de eventos que buscan ofrecer una experiencia única y de calidad sin necesidad de una gran inversión inicial."
                        parra_2 = " Con nuestro servicio, puedes acceder a una amplia variedad de cervezas artesanales y comerciales, adaptadas a las preferencias de tus clientes y al tipo de evento que estés organizando."
                        direccion="leftContainer"
                        claseImg="imgContainer zoomable"
            />
            <Servicios
                    titulo="Presencias en eventos"
                    img="Puesto.jpeg"
                    parra_1="En Santa Diabla, nos especializamos en llevar la mejor cerveza artesanal directamente a tu evento, brindando una experiencia única para todos tus invitados. "
                    parra_2="Ya sea una fiesta privada, una boda, un festival o un evento corporativo, nuestra presencia garantiza que el sabor de nuestras cervezas premium transforme cualquier ocasión en un momento memorable."
                    direccion="rightContainer"
                    claseImg="imgContainerPuesto zoomable"
            />

        </div>
    )
}