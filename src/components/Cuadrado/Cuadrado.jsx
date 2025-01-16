
export const Cuadrado = ({color,handleClick}) => {
    return (
        <div onClick={handleClick}
            style={{
            height:400,
            width:400,
            background: color    
        }}/>

        
    )
}