// ScrollImage.js
import React, { useState, useEffect } from "react";

const ScrollImage = () => {
  const [currentFrame, setCurrentFrame] = useState(1); // Inicia en 1
  const [imageSrc, setImageSrc] = useState(`frames/0001.webp`); // Asigna la imagen inicial

  useEffect(() => {
    // Calcular el scroll máximo
    let maxScroll = document.documentElement.scrollHeight - 2000;

    const handleScroll = () => {
      const maxFrames = 21; // Limitar a 21 frames
      const scrollPosition = window.scrollY; // Posición actual del scroll
      const scrollFraction = scrollPosition / maxScroll; // Fracción del scroll
      const frame = Math.min(Math.floor(scrollFraction * maxFrames) + 1, 21); // Limitar el frame a un máximo de 21, comenzando desde 1
      setCurrentFrame(frame);
    };

    // Actualizar maxScroll cuando se redimensione la ventana
    window.addEventListener("resize", () => {
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    });

    // Event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Actualizar la imagen al cargar la página
    setImageSrc(`frames/${currentFrame.toString().padStart(4, "0")}.webp`);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentFrame]); // Ejecutar cada vez que currentFrame cambie

  const id = currentFrame.toString().padStart(4, "0"); // Asegurarse de que el ID del frame tenga 4 dígitos

  return (
    <div style={{ height: "1080px", textAlign: "center" }}>
      <img
        id="frame"
        src={imageSrc} // Usar la imagen actualizada
        alt={`Frame ${id}`}
        style={{ width: "100%", height: "1080px", objectFit: "cover" }}
      />
    </div>
  );
};

export default ScrollImage;
