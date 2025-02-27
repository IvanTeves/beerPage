import { BiZoomIn } from "react-icons/bi"

export const Card = ({imagen,titulo,precio,size}) => {
    return (
        <div className="leftContainer">
          
            <div className="producto">
            <div className="texto-vertical"> BREWING CO. </div>
            <div className="medio">
                <div className="divLinea">
                    <p className="title"> AMERICAN IPA</p>
                    <div className="linea"></div>   
                </div>

                <p>amargor</p>
                <p>Cerveza color cobrizo con notas caramelizadas,
                de amargor medio con perfil frutado y cítrico que se destacan también en su atrapante aroma. 
                Una perfecta elección para saciar la sed con gran sabor y acompañar comidas rebozadas</p>
            </div>
            <img className="img" src="cervezaFondosinBlanco.png" alt=""/>
            </div>
        </div>
    )
}

