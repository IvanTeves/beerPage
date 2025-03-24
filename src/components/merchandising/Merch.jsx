import { useState } from "react";

export const ImageCard = ({ img_1, img_2, prodName}) => {
    const images = [img_1, img_2]; // ahora sí son strings válidos
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleChangeImage = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="card">
        <img
          src={images[currentIndex]}
          alt="Producto"
          className="card-image"
        />
        <div className="card-circles">
          {images.map((_, index) => (
            <button
              key={index}
              className={`circle-button ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleChangeImage(index)}
            />
          ))}
        </div>
        <p className="prodName">{prodName}</p>
      </div>
    );
  };
  