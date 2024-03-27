import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
  "../../images/portada1.jpg",
  "../../images/portada2.jpg",
  "../../images/portada3.jpg",
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos (5000ms)

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
    };
  }, []);

  return (
    <div className="w-full md:h-screen h-[70vh] relative">
      <button
        className="z-[90] border-yellow-200 rotate-45 absolute left-6 translate-y-[-50%] top-[50%] p-6 border"
        onClick={prevSlide}
      ></button>
      <span className="z-[80] font-light -rotate-90 absolute left-11 translate-y-[-50%] top-[50%] text-yellow-200 text-4xl">
        ^
      </span>
      <button
        className="z-[90] border-yellow-200 rotate-45 absolute right-6 translate-y-[-50%] top-[50%] p-6 border"
        onClick={prevSlide}
      ></button>
      <span className="z-[80] font-light rotate-90 absolute right-11 translate-y-[-50%] top-[50%] text-yellow-200 text-4xl">
        ^
      </span>

      <div className="image-container">
        {images.map((image, index) => (
          <div className="" key={index}>
            <div className="text-center w-8/12 md:w-6/12 m-auto flex flex-col gap-6 md:top-60 top-40 top-52 left-[50%] translate-x-[-50%] absolute z-[90]">
              <span className="text-yellow-200 font-serif font-bold text-sm  tracking-widest">
                DELICIAS EN MINUTOS
              </span>
              <img src="../../images/separator.svg" alt="" className="h-4" />
              <h4 className="md:text-8xl text-4xl font-light text-yellow-50">
                SABOR EXPRESS
              </h4>
              <span className="font-light leading-8 text-yellow-50">
                ¡Bienvenido a Sabor Express! Tu destino para disfrutar de
                deliciosas comidas rápidas con un toque de autenticidad y
                rapidez. ¡Déjate llevar por el sabor y la velocidad!
              </span>
            </div>
            <img
              src={`images/${image}`}
              alt={`Slide ${index}`}
              className={`w-full h-full absolute transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
