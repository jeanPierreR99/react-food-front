export const SectionFour = () => {
  return (
    <div className="w-full bg-[#0e0d0c] relative text-yellow-50">
      <div className="flex md:flex-row flex-col">
        <div className="relative z-[1] md:w-6/12 w-full">
          <img src="../../images/comida.jpg" alt="" className="w-full h-[400px] md:h-[100%]" />
        </div>
        <div className="mx-auto md:px-24 py-10 md:py-0 md:w-6/12 w-10/12 md:my-20 text-center md:text-left flex flex-col gap-6 relative z-[1]">
          <span className="text-yellow-200 font-serif font-bold text-sm  tracking-widest">
            ESPECIALIDAD DEL DÍA
          </span>
          <img
            src="../../images/separator.svg"
            alt=""
            className="h-4 w-fit m-auto md:m-0"
          />
          <h4 className="text-2xl md:text-4xl font-light">
            Delicia Amazónica: Patarashca de Sabor Express
          </h4>
          <span className="font-light leading-8 text-xs md:text-lg">
            Sumérgete en una experiencia culinaria única con nuestra
            especialidad amazónica, la Patarashca de Sabor Express. Inspirada en
            las tradiciones culinarias de la selva peruana, nuestra Patarashca
            es una combinación perfecta de sabores exóticos y frescos, envueltos
            en hojas de bijao para capturar la esencia de la Amazonía en cada
            bocado.
          </span>
          <span className="font-light text-yellow-100 text-xl md:text-3xl">S/ 20.00</span>
        </div>
      </div>
    </div>
  );
};
