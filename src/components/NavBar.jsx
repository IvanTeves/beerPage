import { TiShoppingCart } from "react-icons/ti";
export const NavBar = () => {
  return (
    <header className="header">
      <div style={{display: 'flex',
        justifyContent:'space-between'
      }}>
        <img style={{height:'9vh',width:'9vw', paddingTop:'5px', paddingBottom:'5px', paddingLeft:'10px'}}src="Logoheader.svg" alt="" />
        <nav className="NavBar">
          <a href="">Productos</a>
          <a href="">Servicios</a>
          <a href="">Sobre Nosotros</a>
          <a href="">Nuestros Clientes</a>
          <a href="">Contacto</a>
        </nav>
      </div>

    </header>
  );
}
