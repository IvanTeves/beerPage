import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="divNavbar">
      <img className="imgLogo" src="Logoheader.svg" alt="Logo" />

      {/* Menú para pantallas grandes */}
      <nav className="NavBar">
        <a className="hover-underline" href="">Productos</a>
        <a className="hover-underline" href="">Servicios</a>
        <a className="hover-underline" href="">Sobre Nosotros</a>
        <a className="hover-underline" href="">Nuestros Clientes</a>
      </nav>

      {/* Icono del menú para pantallas pequeñas */}
      <img 
        className="ImgMenu" 
        src="/menu.png" 
        alt="Menú" 
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Menú desplegable con animación */}
      <div className={`dropdownMenu ${menuOpen ? "open" : ""}`}>
        <a className = "hover-underline" href="">Productos</a>
        <a className = "hover-underline" href="">Servicios</a>
        <a className = "hover-underline" href="">Sobre Nosotros</a>
        <a className="hover-underline" href="">Nuestros Clientes</a>
      </div>
    </div>
  );
};
