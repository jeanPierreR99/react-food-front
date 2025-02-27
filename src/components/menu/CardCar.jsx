import React from "react";
import useCartStore from "../../sotre/useCartStorage";

function CardCar({ name, url, price }) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();

  const item = cart.find((i) => i.name === name);
  if (!item) return null;

  return (
    <div className="flex gap-2 flex-col mt-2 w-full">
      <div className="flex gap-2 border-t border-yellow-200 py-2">
        <div className="w-[120px] h-[90px] rounded-full">
          <img src={url} alt={name} className="w-[90px] h-[90px] rounded-full" />
        </div>
        <div className="flex flex-col justify-center text-yellow-50 text-sm w-full">
          <span className="font-bold">{name}</span>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <button
                className="font-bold text-3xl px-2 text-red-600"
                onClick={() => increaseQuantity(name)}
              >
                +
              </button>
              <span className="font-bold">{item.quantity}</span>
              <button
                className="font-bold text-3xl px-2 text-red-600"
                onClick={() => {
                  if (item.quantity > 1) {
                    decreaseQuantity(name);
                  } else {
                    removeFromCart(name);
                  }
                }}
              >
                -
              </button>
            </div>
            <span className="text-yellow-300 font-bold text-lg text-right">
              S/ {price}
            </span>
          </div>
          <span className="font-light">Total: S/ {item.quantity * price}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCar;
