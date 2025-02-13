import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";


export const NavBar = () => {

return (
    <div className ='divNavbar' >
      <img className='imgLogo' src="Logoheader.svg" alt="" />
      <nav className="NavBar">
        <a className="hover-underline" href="">Productos</a>
        <a className="hover-underline" href="">Servicios</a>
        <a className="hover-underline" href="">Sobre Nosotros</a>
        <a className="hover-underline" href="">Nuestros Clientes</a>
      </nav>
      <img className = 'ImgMenu' src="/menu.png" alt="" />
    </div>
   

);
}
