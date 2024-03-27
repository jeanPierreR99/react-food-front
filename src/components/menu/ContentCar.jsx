import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import CardCar from "./CardCar";
function ContentCar({visible}) {
  return (
    <div className={`fixed overflow-y-auto delay-200 duration-300 ${visible ? 'right-[0px]' : '-right-[650px]'} top-20 z-[999] bg-[#2b272787] backdrop-blur-sm w-full md:w-[350px] h-auto flex flex-col p-2 pb-10`}>
      <div className="flex tracking-widest gap-2 justify-center items-center py-2 text-yellow-300">
        <FaShoppingBag className="text-3xl"></FaShoppingBag>
        <span>Carrito</span>
      </div>
      <CardCar></CardCar>
      <CardCar></CardCar>
      <CardCar></CardCar>
      <span className="text-yellow-50 my-2 text-sm font-bold tracking-widest">TOTAL: S/ 350</span>
      <button className="bg-yellow-200 hover:bg-yellow-300 tracking-widest rounded-md py-1 text-gray-800 font-semibold">CONFIRMAR</button>
    </div>
  );
}

export default ContentCar;
