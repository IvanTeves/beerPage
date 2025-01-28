import { TiShoppingCart } from "react-icons/ti";
export const NavBar = () => {
  return (
    <header className="header">
      <div style={{display: 'flex',
        justifyContent:'space-between'
      }}>
        <img style={{height:'9vh',width:'9vw', paddingTop:'5px', paddingBottom:'5px', paddingLeft:'10px'}}src="Logoheader.svg" alt="" />
        <nav className="NavBar">
          <a className="hover-underline" href="">Productos</a>
          <a className="hover-underline" href="">Servicios</a>
          <a className="hover-underline" href="">Sobre Nosotros</a>
          <a className="hover-underline" href="">Nuestros Clientes</a>
        </nav>
      </div>

    </header>
  );
}
