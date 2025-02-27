import {Card1} from './SectionCard'

export const SectionTwo = ()=>{

    const items = [
        {
            title: "Helados", image: "https://thecampanile.org/wp-content/uploads/2017/02/icicles-900x600.jpg"
        },
        {
            title: "Hamburguesas", image: "https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg"
        },
        {
            title: "Menús", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU"
        }
    ]
    return  <div className="bg-[#0e0d0c] text-yellow-50 pt-20 relative pb-20">
    <div className="text-center md:w-4/12 w-10/12 m-auto mb-28 flex flex-col gap-6 relative z-[1]">
        <span className="text-yellow-200 font-serif font-bold text-sm  tracking-widest">DELICIAS EN MINUTOS</span>
        <img src="../../images/separator.svg" alt="" className="h-4" />
        <h4 className="md:text-5xl text-2xl font-light">Ofrecemos</h4>
<span className="font-light leading-5 text-xs md:text-xl">Nuestra carta contiene desde variedades de sabores de helados, hamburguesas personalizables hasta menús tradicionales y regionales</span>
    </div>
    <div className="relative z-[1] flex flex-wrap gap-20 md:gap-0 justify-around">
         <div className="md:mt-[-150px] relative">
        <Card1 text={items[0].title} image={items[0].image}></Card1>
        </div >
        <div className="relative">
        <Card1 text={items[1].title} image={items[1].image}></Card1>
        </div>
        <div className="md:mt-[-150px] relative">
        <Card1 text={items[2].title} image={items[2].image}></Card1>
        </div>
    </div>
    <img src="../../images/shape-5.png" alt="" className=" absolute w-8/12 md:h-full md:top-0 h-[50%] top-0 left-0 opacity-40"/>
</div>
}