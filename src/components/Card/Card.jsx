import { BiZoomIn } from "react-icons/bi"

export const Card = ({imagen,titulo,precio,size}) => {
    return (
        <div className="card"style={{width:size,
            height:size

        }}>
            <img   style={{
                height: "200px", 
                width: "200px", 
                transition: "transform 0.3s ease", 
                cursor: "pointer"
            }}src={imagen} alt="producto"   className="zoomable" />
            <h3 style={{color:"rgba(28, 24, 24, 0.81)"}}>{titulo}</h3>
            <p style={{color:"rgba(28, 24, 24, 0.81)"}}>${precio}</p>
        </div>
    )
}

