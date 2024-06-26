import React, { useState } from "react";
import { FaUtensils, FaIceCream, FaHamburger } from "react-icons/fa";
import Food from "../components/menu/Food";
import ButtonCar from "../components/menu/ButtonCar";
import ContentCar from "../components/menu/ContentCar";
const Menu = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="bg-[#161718] pt-52 md:pt-80 h-screen relative">
      <h4
        style={{ fontFamily: "fantasy" }}
        className="md:text-6xl text-4xl text-center text-yellow-100 tracking-widest font-light"
      >
        SABOR EXPRESS
      </h4>
      <h4 className="md:text-5xl border-b w-fit m-auto border-yellow-300 border-b-2 text-4xl text-center text-yellow-300 font-bold">
        Nuestra Carta
      </h4>
      <div className="flex justify-center gap-4 md:gap-10 mb-4">
        <button
          className={
            activeTab === 1
              ? "tab-active text-yellow-300 border-b border-yellow-300 border-double border-b-4 py-4 px-6"
              : "tab text-yellow-50 py-4 px-6"
          }
          onClick={() => handleTabClick(1)}
        >
          <FaUtensils className="inline-block mr-2" />
          Menu
        </button>
        <button
          className={
            activeTab === 2
              ? "tab-active text-yellow-300 border-b border-yellow-300 border-double border-b-4 py-4 px-6"
              : "tab text-yellow-50 py-4 px-6"
          }
          onClick={() => handleTabClick(2)}
        >
          <FaIceCream className="inline-block mr-2" />
          Helados
        </button>
        <button
          className={
            activeTab === 3
              ? "tab-active text-yellow-300 border-b border-yellow-300 border-double border-b-4 py-4 px-6"
              : "tab text-yellow-50 py-4 px-6"
          }
          onClick={() => handleTabClick(3)}
        >
          <FaHamburger className="inline-block mr-2" />
          Hamburguesas
        </button>
      </div>

      <div className="bg-[#161718]">
        {activeTab === 1 && (
          <div className="content-food mt-20">
            <Food></Food>
            <Food></Food>
            <Food></Food>
            <Food></Food>
            <Food></Food>
            <Food></Food>
          </div>
        )}
        {activeTab === 2 && (
          <div className="content-food mt-20">
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
        </div>
        )}
        {activeTab === 3 && (
         <div className="content-food mt-20">
         <Food></Food>
         <Food></Food>
         <Food></Food>
         <Food></Food>
         <Food></Food>
         <Food></Food>
       </div>
        )}
      </div>
      <img
        src="https://i.ytimg.com/vi/H6lgxgEWIs8/maxresdefault.jpg"
        alt=""
        className="absolute w-[300px] h-[300px] left-[-100px] top-[-100px] border-8 md:w-[650px] md:h-[650px] md:top-[-300px] md:left-[-100px] md:border-[15px] border-yellow-300 rounded-full z-10"
      />
      <img
        src="https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg"
        alt=""
        className=" absolute w-[300px] h-[300px] left-[80px] top-[-150px] border-8 md:w-[650px] md:h-[650px] md:top-[-380px] md:left-[350px] md:border-[15px] border-yellow-300 rounded-full"
      />
      <ButtonCar></ButtonCar>
    </div>
  );
};

export default Menu;
