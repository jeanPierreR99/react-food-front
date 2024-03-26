import React from "react";

function Food() {
  return (
    <div className="food flex flex-row w-full">
      <div className="content-image left w-6/12 h-[500px] relative">
        <img
          src="https://blog-parceiros.ifood.com.br/wp-content/uploads/2022/06/spaghetti-bolognese-2021-08-26-16-53-08-utc-2.jpg"
          alt="load"
          className="w-full h-full"
        />
        <span className="price absolute top-[-30px] right-[-30px] text-4xl font-light bg-red-700 border-4 text-white h-[150px] w-[150px] text-center flex justify-center items-center rounded-full">
          S/ 20.00
        </span>
      </div>
      <div className="right w-6/12 h-[500px] flex gap-5 flex-col p-12">
        <span className="font-bold leading-8 text-gray-600 tracking-widest bg-gray-50 px-2 w-fit rounded-md">
          TALLARIN CON POLLO
        </span>
        <span className="font-light text-gray-100">
          Disfruta de nuestro exquisito plato de tallarines con pollo, una
          combinación perfecta de sabores que te transportará a los rincones más
          auténticos de la cocina casera. Deliciosos tallarines al dente
          acompañados de jugosos trozos de pollo, bañados en una salsa aromática
          y llena de especias cuidadosamente seleccionadas. Cada bocado es una
          explosión de sabores que te hará sentir como en casa. Ya sea para un
          almuerzo rápido o una cena reconfortante, nuestros tallarines con
          pollo son la elección ideal para satisfacer tu apetito y deleitar tu
          paladar.
        </span>
        <span className="font-bold leading-8 text-gray-300 tracking-widest">
          CONTENIDO:
        </span>
        <span className="font-light text-gray-100">
          tallarines - salsa de tomate - carne o pollo - aji al gusto - refresco de cortesia
        </span>
      </div>
    </div>
  );
}

export default Food;
