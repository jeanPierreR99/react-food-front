import Links from "./Links"
import { BiTime } from "react-icons/bi";
import {FaFeatherAlt} from "react-icons/fa";
import {BsGeoAltFill, BsTelephone} from "react-icons/bs"
import { Link, Element } from 'react-scroll';
import React, { useEffect, useState } from 'react';

const Header = () =>{

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Agrega un evento de escucha de scroll cuando el componente se monta
    window.addEventListener('scroll', handleScroll);

    // Elimina el evento de escucha de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Verifica la posición actual del scroll y actualiza el estado en consecuencia
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const firtsCLick = ()=>{
    alert("priemr click")
  }

  const secondCLick = ()=>{
    alert("segundo click")
  }

  const items = [
    {text: "HOME", move: "sectionOne"},
    {text: "CATEGORY", move: "sectionTwo"},
    {text: "OTRO", move: "sectionThree"},
    {text: "OTRO", move: "sectionFour"},
    {text: "OTRO", move: "sectionFive"},
  ]
    return <div className={`fixed z-[20] bg-[] z-[99] bg-[#121212] ${scrolled ? 'md:bg-[#121212]' : 'md:bg-transparent'}`}>
      <div className=" flex flex-col md:flex-row justify-between px-6 py-4 border-b border-yellow-50 text-sm font-light">
        <div className="left text-yellow-50 flex gap-1 items-center">
          <BsGeoAltFill className="text-xl"></BsGeoAltFill>
          <span>Restaurant St, Delicious City, London 9578, UK</span><FaFeatherAlt className="text-sm text-yellow-200 mx-2"></FaFeatherAlt>
          <BiTime className="text-xl"></BiTime>
          <span>Daily : 8.00 am to 10.00 pm</span>
          </div>
        <div className="right text-yellow-50 flex items-center gap-1"><BsTelephone></BsTelephone><span>987676544</span></div>
      </div>
<nav class="w-screen lg:px-40 sm:px-10 px-2 sm:flex justify-between py-4 items-center border-b-1 border-gray-600">
  <div class="flex px-4 justify-between sm:py-0 pb-1">
    <a href="">
     <FaFeatherAlt className="text-5xl text-yellow-200"></FaFeatherAlt>
    </a>

    <button class='text-yellow-200 text-3xl sm:hidden block focus:outline-none' id='navIcon' onClick={()=>{var nav = document.getElementById("navContent");

if (nav.classList.contains("block")) {
    nav.classList.remove("block");
    nav.classList.add("hidden");
} else {
    nav.classList.remove("hidden");
    nav.classList.add("block");
}
}}>
      &#9776;
    </button>
  </div>

  <ul class='hidden sm:flex cursor-pointer' id='navContent'>
    {/* <li class='py-4 px-6 sm:border-b-2 border-blue-300 hover:text-blue-300 transition duration-200 text-blue-300 hover:bg-gray-800 sm:hover:bg-transparent text-white '><a href="">Home</a></li> */}
  {items.map((item, index)=>(
    <Link
    to={item.move}
    spy={true}
    smooth={true}
    offset={-70} // Ajusta el desplazamiento según tu diseño
    duration={500} // Duración de la animación en milisegundos
  >
     <Links key={index} text={item.text}/>
  </Link>
  ))}
  </ul>
</nav>
    </div>
}

export default Header;