import {useState,useEffect,useRef } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

export const NuestraHistoria = ({titulo,parra_1,parra_2,parra_3,parra_4,parra_5,parra_6}) => {
    
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

          <div className="NuestraHistoria" style={{
            height: isMobile ? (expanded ? "160vh" : "auto") :"80vh",
            transition: "height 0.3s ease",
            paddingBottom:"2vh",
            zIndex:"3"
}}>
                <img src="/SDNuestraHistoria.png" className="imgNosotros" alt="" />
                <div className="NuestraHistoriaDiv" >
                  <p className="titleParraLeft" style={{marginTop:'1vw'}}>Cervecería Santa Diabla</p>
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
                 <p className="parraLeft" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,
                                         }}>
                     {parra_4}
                 </p>
                 <p className="parraLeft" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,
                                         }}>
                     {parra_5}
                 </p>
                 <p className="parraLeft" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,
                                         }}>
                     {parra_6}
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