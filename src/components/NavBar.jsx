import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="divNavbar">
      <img className="imgLogo" src="logoDiablaLargo.png" alt="Logo" />
      <img className="imgLogo2" src="LOGOBREWING.png" alt="Logo" />

      {/* Menú para pantallas grandes */}
      <nav className="NavBar">
        <a className="hover-underline" href="#Productos">Productos</a>
        <a className="hover-underline" href="#Servicios">Servicios</a>
        <a className="hover-underline" href="#Sobre">Sobre Nosotros</a>
        <a className="hover-underline" href="#Nuestros">Nuestros Clientes</a>
      </nav>

      {/* Icono del menú para pantallas pequeñas */}
      <img 
        className="ImgMenu" 
        src="/menuBlack.png" 
        alt="Menú" 
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Menú desplegable con animación */}
      <div className={`dropdownMenu ${menuOpen ? "open" : ""}`}>
        <a className = "hover-underline_Mobile" href="#Productos">Productos</a>
        <a className = "hover-underline_Mobile" href="#Servicios">Servicios</a>
        <a className = "hover-underline_Mobile" href="#Sobre">Sobre Nosotros</a>
        <a className="hover-underline_Mobile" href="#Nuestros">Nuestros Clientes</a>
      </div>
    </div>
  );
};
