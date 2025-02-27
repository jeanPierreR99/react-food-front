const Card1 = ({ text, image }) => {
  return (
    <div className="w-[300px] flex flex-col gap-7 text-center tracking-widest">
      <img
        src="../../images/img-pattern.svg"
        alt=""
        className="absolute top-[-20px] transform translate-x-[50%] h-[440px] z-[-1]"
      />
      <img className="w-full h-[400px]" src={image} alt="" />
      <h4 className="text-yellow-50 text-2xl font-light">{text}</h4>
      <a
        href="/menu"
        className="w-fit m-auto pb-1 duration-200 ease-in-out hover:border-b-4 hover:border-yellow-200 border-double text-yellow-200 font-serif font-bold text-xs"
      >
        VER CARTA
      </a>
    </div>
  );
};

const Card2 = ({ type, title, description, image, price }) => {
  return (
    <div className="w-full md:flex gap-4">
      <img src={image} alt="" className="w-full h-[200px] md:h-auto md:w-28" />
      <div className="mt-6 md:mt-0">
      <span className="text-xs md:text-xl text-yellow-100 font-bold">{type}</span>
        <div className="flex justify-between">
          <span className="text-xs md:text-xl text-gray-300 font-medium">{title}</span>
          <span className="text-xs md:text-xl text-yellow-100 font-medium">{price}</span>
        </div>
        <span className="text-gray-300">{description}</span>
      </div>
    </div>
  );
};

export { Card1, Card2 };
