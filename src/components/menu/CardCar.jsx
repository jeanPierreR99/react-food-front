import React, { useState } from "react";

function CardCar() {
  const [cant, setCant] = useState(1);
  const price = 20.0;
  const [subTotal, setSubtotal] = useState(price);

  return (
    <div className="flex gap-2 flex-col mt-2 w-full">
      <div className="flex gap-2 border-t border-yellow-200 py-2">
        <div className="w-[120px] h-[90px] rounded-full">
          <img
            src="https://blog-parceiros.ifood.com.br/wp-content/uploads/2022/06/spaghetti-bolognese-2021-08-26-16-53-08-utc-2.jpg"
            alt=""
            className="w-[90px] h-[90px] rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center text-yellow-50 text-sm w-full">
          <span className="font-bold ">Tallarin con pollo </span>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <button
                className="font-bold text-3xl px-2 text-red-600"
                onClick={() => {
                  setCant((prevCant) => {
                    const newCant = prevCant + 1;
                    setSubtotal(price * newCant);
                    return newCant;
                  });
                }}
              >
                +
              </button>
              <span className="font-bold">{cant}</span>
              <button
                className="font-bold text-3xl px-2 text-red-600"
                onClick={() => {
                  cant > 0 &&
                    setCant((prevCant) => {
                      const newCant = prevCant - 1;
                      setSubtotal(price * newCant);
                      return newCant;
                    });
                }}
              >
                -
              </button>
            </div>
            <span className="text-yellow-300 font-bold text-lg text-right">
              S/ {price}
            </span>
          </div>
          <span className=" font-light">Total: S/ {subTotal}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCar;
