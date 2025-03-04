import React, { useState, useEffect } from 'react';

export const ImgBanner = () => {
  // Estado para controlar la visibilidad
  const [isVisible, setIsVisible] = useState(false);

  // Usamos useEffect para cambiar la visibilidad cuando el componente se monte
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);  // Cambiar el estado para hacer visible la imagen
    }, 100);  // Ajusta el tiempo de la transición si es necesario

    return () => clearTimeout(timer);  // Limpiar el timer al desmontar el componente
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div className={`bannerImg ${isVisible ? 'visible' : ''}`}>
      {/* Contenido de la imagen */}
    </div>
  );
};
  /*<img src="" alt="" />*/
/*
export class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <div >
                    <img  id="sdRed" src="bannerSantaDiabla.png" alt="Carousel 1" />                          
                </div>
                <div >
                    <img  id="sdCerv"src="BannerCerveza.jpg" alt="Carousel 3" />
                </div>
            </Carousel>
        );
    }
}
*/