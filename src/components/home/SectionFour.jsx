import { Card1, Card2 } from "./SectionCard";
import { BsBookmarkStarFill } from "react-icons/bs";
export const SectionFour = () => {
  return (
    <div className="w-full bg-[#0e0d0c] relative text-yellow-50">
      <div className="flex md:flex-row flex-col">
        <div className="relative z-[1] md:w-6/12 w-full">
          <img src="../../images/comida.jpg" alt="" className="w-full h-[400px] md:h-[100%]" />
        </div>
        <div className="mx-auto md:px-24 py-40 md:py-0 md:w-6/12 w-10/12 md:my-20 text-center md:text-left flex flex-col gap-6 relative z-[1]">
          <span className="text-yellow-200 font-serif font-bold text-sm  tracking-widest">
            ESPECIALIDAD DEL DÍA
          </span>
          <BsBookmarkStarFill className="absolute md:left-12 top-[80px]  left-[47%] text-yellow-200 md:top-10 text-4xl animate-bounce"></BsBookmarkStarFill>
          <img
            src="../../images/separator.svg"
            alt=""
            className="h-4 w-fit m-auto md:m-0"
          />
          <h4 className="text-4xl font-light">
            Delicia Amazónica: Patarashca de Sabor Express
          </h4>
          <span className="font-light leading-8">
            Sumérgete en una experiencia culinaria única con nuestra
            especialidad amazónica, la Patarashca de Sabor Express. Inspirada en
            las tradiciones culinarias de la selva peruana, nuestra Patarashca
            es una combinación perfecta de sabores exóticos y frescos, envueltos
            en hojas de bijao para capturar la esencia de la Amazonía en cada
            bocado.
          </span>
          <span className="font-light text-yellow-100 text-3xl">S/ 20.00</span>
        </div>
      </div>
      {/* <img src="../../images/fondo-utensilios-cocina-dibujados-mano-pizarra-iconos-vectoriales-estilo-boceto-blanco-negro_624018-25.avif" alt="" className=" absolute w-full h-full bottom-0 right-0 opacity-[0.03]"/> */}
    </div>
  );
};
