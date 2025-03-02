import { FiPlusCircle } from "react-icons/fi";

export const Card = ({titulo,fondo,imgCerveza,parra_1,parra_2,alcohol,circulosPintados,direccion,imgX,imgY}) => {
    
    const circulos = Array.from({ length: 7 }, (_, i) => (
        <div key={i} className={i < circulosPintados ? "circlePintado" : "circle"}>
            <img className={i < circulosPintados ? "circlePintado" : "circle"}src={i < circulosPintados ? "./lupulo.png" : "./lupulovacio.png"} alt="lúpulo" />
        </div>
    ));
    return (
        <div className={direccion}>   
        <div className="producto" style={{ backgroundImage: `url(${fondo})` }}>
          <div className="texto-vertical"> SANTA DIABLA </div>
          <div className="medio">
              <div className="divLinea">
                  <p className="title"> {titulo}</p>
                  <div className="linea"></div>   
              </div>

              <div className="amargoFlexRight" style={{marginBottom:'4vh',paddingLeft:'1vw'}}>
                <p>Amargor</p>
                <div className="circle-container">{circulos}</div>
              </div>
            <p className="leftAbv" style={{paddingLeft:'1vw', textAlign:'left' ,fontSize:'2.4vh'}}>ABV: {alcohol}</p>
            <p className="cardDesc" style={{paddingLeft:'1vw',paddingRight:'1vw', textAlign:'left',fontSize:'2.4vh'}}>{parra_1} 
            </p>
            <p className="cardDesc" style={{padding:'1vw', textAlign:'left',fontSize:'2.4vh'}}>{parra_2}</p>
            <FiPlusCircle className="plus"/>
          </div>
          <img className="img" src={imgCerveza} alt=""/>
        </div>
      </div>
    )
}

