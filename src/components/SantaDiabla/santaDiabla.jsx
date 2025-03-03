import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useState,useEffect } from "react";

export const Card = ({titulo,fondo,imgCerveza,parra_1,parra_2,alcohol,circulosPintados,direccion,imgX,imgY}) => {
  
    return (
        <div className={direccion}>   
        <div className="producto" style={{ backgroundImage: `url(${fondo})` }}>
          <div className="texto-vertical"> SANTA DIABLA </div>
          <div className= "medio" style={{
                                          height: isMobile ? (expanded ? "70vh" : "35vh") : "90vh",
                                          transition: "height 0.3s ease"
            }}>
              <div className="divLinea">
                  <p className="title"> {titulo}</p>
                  <div className="linea"></div>   
              </div>

              <div className="amargoFlexRight" style={{marginBottom:'4vh',paddingLeft:'1vw'}}>
                <p>Amargor</p>
                <div className="circle-container">{circulos}</div>
              </div>
            <p className="leftAbv" >ABV: {alcohol}</p>
            <p className="cardDesc" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,

            }}>{parra_1} 
            </p>
            <p className="cardDesc" style={{
                                          display: isMobile ? (expanded ? 'block' : 'none') : 'block' ,             

            }}>{parra_2}</p>
            <div 
                onClick={toggleExpand} 
            >
                {expanded ?  <FiMinusCircle className="plus"/> : <FiPlusCircle className="plus"/>}
            </div>           

          </div>
          <img className="img" src={imgCerveza} alt=""/>
        </div>
      </div>
    )
}

