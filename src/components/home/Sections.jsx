import {Card1, Card2} from './SectionCard'
import {BsBookmarkStarFill} from "react-icons/bs"

const SectionOne = ()=>{

    const items = [
        {
            title: "breakfast", image: "https://thecampanile.org/wp-content/uploads/2017/02/icicles-900x600.jpg"
        },
        {
            title: "breakfast", image: "https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg"
        },
        {
            title: "breakfast", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU"
        }
    ]
    return  <div className="bg-[#0e0d0c] text-yellow-50 pt-20 relative pb-20">
    <div className="text-center md:w-4/12 w-10/12 m-auto mb-28 flex flex-col gap-6 relative z-[1]">
        <span className="text-yellow-200 font-serif font-bold text-sm  tracking-widest">FLAVORS FOR RUNE</span>
        <img src="../../images/separator.svg" alt="" className="h-4" />
        <h4 className="md:text-5xl text-4xl font-light">We Offer Top Notch</h4>
<span className="font-light leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.</span>
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

const SectionTwo = ()=>{
    return     <div className="w-full pb-40 bg-[#161718] relative text-yellow-50 pt-20">
        <div className='flex md:flex-row flex-col md:px-28 gap-20'>
            <div className="text-center md:w-6/12 w-10/12 m-auto flex flex-col gap-6 relative z-[1]">
            <span className='text-yellow-200 font-serif font-bold text-sm  tracking-widest'>OUR STORY</span>
            <img src="../../images/separator.svg" alt="" className="h-4" />
            <h4 className="md:text-5xl text-4xl font-light">Every Fla vor Tells a Story</h4>
            <span className='font-light leading-8'>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.</span>
            <span className='font-bold'>Book Through Call</span>
            <span className='font-light text-yellow-100 text-3xl'>+51 957522312</span>
            <button className='text-yellow-100 border w-fit m-auto px-6 py-3 duration-500 ease-in hover:bg-yellow-200 hover:text-black text-sm font-serif'>READ MORE</button>
            </div>
            <div className='relative z-[1] md:w-6/12 w-9/12 m-auto'>
            <img src="https://media.istockphoto.com/id/1307190527/es/foto/feliz-camarero-sirviendo-comida-a-un-grupo-de-amigos-en-un-pub.jpg?s=612x612&w=0&k=20&c=-BICd4vjkPYTHSW4zCdVd1vqbjG2Guz07i9Ctm9nzo4=" alt="" className="w-[100%] md:h-[500px] h-[400px] "/>
            <img src="https://us.123rf.com/450wm/nejron/nejron1904/nejron190400843/121899469-par-hablar-con-el-camarero-detr%C3%A1s-del-mostrador-de-bar-en-un-caf%C3%A9.jpg?ver=6" alt="" className="absolute bottom-[-50px] left-[-20px] w-[50%] h-[50%]"/>
           
            </div>
        </div>
      {/* <img src="../../images/fondo-utensilios-cocina-dibujados-mano-pizarra-iconos-vectoriales-estilo-boceto-blanco-negro_624018-25.avif" alt="" className=" absolute w-full h-full bottom-0 right-0 opacity-5"/> */}
</div>
}

const SectionThree = ()=>{
    return     <div className="w-full bg-[#0e0d0c] relative text-yellow-50">
    <div className='flex md:flex-row flex-col'>
    <div className='relative z-[1] md:w-6/12 w-full'>
        <img src="../../images/comida.jpg" alt="" className="w-full h-full"/>
       
        </div>
        <div className="px-24 py-40 md:w-6/12 w-full text-center md:text-left flex flex-col gap-6 relative z-[1]">
        <span className='text-yellow-200 font-serif font-bold text-sm  tracking-widest'>SPECIAL DISH</span>
        <BsBookmarkStarFill className='absolute md:left-12 top-[80px]  left-[48%] text-yellow-200 md:top-48 text-4xl animate-bounce'></BsBookmarkStarFill>
        <img src="../../images/separator.svg" alt="" className="h-4 w-fit m-auto md:m-0" />
        <h4 className="text-4xl font-light">Every Fla vor Tells a Story</h4>
        <span className='font-light leading-8'>Lornd  industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.</span>
        <span className='font-light text-yellow-100 text-3xl'>S/20.00</span>
        <button className='text-yellow-100 border w-fit m-auto px-6 py-3 duration-500 ease-in hover:bg-yellow-200 hover:text-black text-sm font-serif'>VIEW ALL MENU</button>
        </div>
    </div>
  {/* <img src="../../images/fondo-utensilios-cocina-dibujados-mano-pizarra-iconos-vectoriales-estilo-boceto-blanco-negro_624018-25.avif" alt="" className=" absolute w-full h-full bottom-0 right-0 opacity-[0.03]"/> */}
</div>
}

const SectionFour = ()=>{
    const items = [
        {
            title: "breakfast", description:"Lorem ipsossimus laboriosam dolore, totam obcaecati quo non quia! Quisquam eveniet, rem quis in facere ad itaque. Sed, placeat quisquam.", image: "https://thecampanile.org/wp-content/uploads/2017/02/icicles-900x600.jpg", price:"s/10.00"
        },
        {
            title: "breakfast", description:"Lorem ipsossimus laboriosam dolore, totam obcaecati quo non quia! Quisquam eveniet, rem quis in facere ad itaque. Sed, placeat quisquam.", image: "https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg", price:"s/20.00"
        },
        {
            title: "breakfast", description:"Lorem ipsossimus laboriosam dolore, totam obcaecati quo non quia! Quisquam eveniet, rem quis in facere ad itaque. Sed, placeat quisquam.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU", price:"s/30.00"
        },
        {
            title: "breakfast", description:"Lorem ipsossimus laboriosam dolore, totam obcaecati quo non quia! Quisquam eveniet, rem quis in facere ad itaque. Sed, placeat quisquam.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU", price:"s/40.00"
        },
        {
            title: "breakfast", description:"Lorem ipsossimus laboriosam dolore, totam obcaecati quo non quia! Quisquam eveniet, rem quis in facere ad itaque. Sed, placeat quisquam.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU", price:"s/50.00"
        },
        {
            title: "breakfast", description:"Lorem ipsossimus laboriosam dolore, totam obcaecati quo non quia! Quisquam eveniet, rem quis in facere ad itaque. Sed, placeat quisquam.", image: "https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg", price:"s/60.00"
        }
    ]

    return     <div className="w-full flex flex-col items-center gap-6 pb-40 bg-[#161718] relative text-yellow-50 pt-20">
       <span className='text-yellow-200 font-serif font-bold text-sm  tracking-widest'>SPECIAL SELECTION</span>
       <img src="../../images/separator.svg" alt="" className="h-4 w-fit" />
       <div>
       <h4 className="md:text-5xl text-4xl font-light">Every Fla vor Tells a Story</h4>
       </div>
       <div className='flex md:flex-row flex-col md:gap-4 gap-20 font-light leading-6 text-sm mt-8'>
        <div className='left md:w-6/12  w-full border-r flex flex-col gap-20'>
     {
        items.map((item, index)=>(
            index<3 ? <Card2 key={index} title={item.title} image={item.image} description={item.description} price={item.price}></Card2>: ""
        ))
     }

    
        </div>
        <div className='right md:w-6/12  w-full flex flex-col gap-20'>
        {
        items.map((item, index)=>(
            index>2 ? <Card2 key={index} title={item.title} image={item.image} description={item.description} price={item.price}></Card2>: ""
        ))
     }

        
        </div>
       
       </div>
      <img src="../../images/fondo-utensilios-cocina-dibujados-mano-pizarra-iconos-vectoriales-estilo-boceto-blanco-negro_624018-25.avif" alt="" className=" absolute w-full h-[80%] bottom-0 right-0 opacity-5"/>
</div>
}

export{
    SectionOne, SectionTwo,SectionThree, SectionFour
}