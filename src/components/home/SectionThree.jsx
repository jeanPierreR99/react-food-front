import { Card1, Card2 } from "./SectionCard";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export const SectionThree = () => {
  return (
    <div className="w-full pb-40 bg-[#161718] relative text-yellow-50 py-20">
      <div className="flex md:flex-row flex-col w-10/12 m-auto gap-20">
        <div className="text-center md:w-6/12 w-12/12 m-auto flex flex-col gap-6 relative z-[1]">
          <span className="text-yellow-200 font-serif font-bold text-sm  tracking-widest">
            SOBRE NOSOTROS
          </span>
          <img src="../../images/separator.svg" alt="" className="h-4" />
          <h4 className="md:text-5xl text-4xl font-light">
            Cada Sabor Cuenta UNa Historia
          </h4>
          <span className="font-light leading-8">
            En Sabor Express, nos apasiona ofrecerte una experiencia culinaria
            rápida, deliciosa y llena de sabor. Desde nuestros inicios, nos
            hemos dedicado a proporcionar a nuestros clientes comidas rápidas de
            alta calidad que satisfagan sus antojos con eficiencia y
            autenticidad.
          </span>
          <span className="font-light leading-8">
            No solo nos preocupamos por ofrecerte comida deliciosa, sino también
            por brindarte un servicio rápido y amigable. Nos enorgullece atender
            a nuestros clientes con una sonrisa y asegurarnos de que su
            experiencia sea siempre satisfactoria y memorable.
          </span>

          <span className="font-bold">Pide a través de una llamada</span>
          <span className="font-light text-yellow-100 text-3xl">
            +51 957522312
          </span>
          <a href="/menu" className="z-[10]">
            <button className="text-yellow-100 border w-fit m-auto px-6 py-3 duration-500 ease-in hover:bg-yellow-200 hover:text-black text-sm font-serif">
                SEGUIR LEYENDO
            </button>
        </a>
        </div>
        <div className="relative z-[1] md:w-6/12 w-12/12 m-auto">
          <img
            src="https://media.istockphoto.com/id/1307190527/es/foto/feliz-camarero-sirviendo-comida-a-un-grupo-de-amigos-en-un-pub.jpg?s=612x612&w=0&k=20&c=-BICd4vjkPYTHSW4zCdVd1vqbjG2Guz07i9Ctm9nzo4="
            alt=""
            className="w-[100%] md:h-[500px] h-[400px] "
          />
          <img
            src="https://us.123rf.com/450wm/nejron/nejron1904/nejron190400843/121899469-par-hablar-con-el-camarero-detr%C3%A1s-del-mostrador-de-bar-en-un-caf%C3%A9.jpg?ver=6"
            alt=""
            className="absolute bottom-[-50px] left-[-20px] w-[50%] h-[50%]"
          />
        </div>
      </div>
      {/* <img src="../../images/fondo-utensilios-cocina-dibujados-mano-pizarra-iconos-vectoriales-estilo-boceto-blanco-negro_624018-25.avif" alt="" className=" absolute w-full h-full bottom-0 right-0 opacity-5"/> */}
    </div>
  );
};
