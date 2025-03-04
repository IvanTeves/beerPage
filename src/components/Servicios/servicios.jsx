
import {useState,useEffect,useRef } from "react";
import Swal from "sweetalert2";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

export const Servicios = ({titulo,img,parra_1,parra_2,parra_3,direccion,claseImg}) => {
    
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


    return (

          <div className={direccion} style={{backgroundImage:'url(/logoDiablaFondo.png)',  backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                    backgroundBlendMode: "multiply",backgroundColor: "rgba(0, 0, 0, 0.586)"}}>
                <img src={img} className={claseImg} alt="" />
                <div className="divServicios" style={{
                                          height: isMobile ? (expanded ? "70vh" : "auto") : "100%",
                                          transition: "height 0.3s ease"
                }}>
                  <p className="titleParraLeft">{titulo}</p>
                  <p className="parraLeft" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,
                                          }}>
                     {parra_1}
                  </p>
                 <p className="parraLeft" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,
                                        }}>
                    {parra_2}
                 </p>
                 <p className="parraLeft" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,
                                         }}>
                     {parra_3}
                 </p>
                 <div 
                    onClick={toggleExpand} 
                 >
                    {expanded ?  <FiMinusCircle className="plus2"/> : <FiPlusCircle className="plus2"/>}
                 </div>  
               </div>

          </div>          
    )
}
/*
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
*/