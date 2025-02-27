import React, { useState } from 'react'
import { FaUtensils, FaIceCream, FaHamburger } from 'react-icons/fa'
import Food from '../components/menu/Food'
import ButtonCar from '../components/menu/ButtonCar'
import Footer from '../components/Footer'

const itemsFood = {
  comidas: [
    {
      name: 'Menú Italiano',
      description:
        'Un menú completo inspirado en la auténtica cocina italiana. Incluye una deliciosa porción de lasaña casera con carne y salsa bechamel, acompañada de una ensalada fresca caprese con mozzarella, tomate y albahaca. Para terminar, disfruta de un suave tiramisú casero.',
      content:
        'Lasaña de carne, ensalada caprese, tiramisú, pan artesanal, bebida a elección',
      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/d5/6d.jpg',
      price: 18
    },
    {
      name: 'Menú Criollo',
      description:
        'Prueba los sabores tradicionales con nuestro menú criollo. Incluye una jugosa porción de lomo saltado con papas fritas y arroz, acompañado de una entrada de causa limeña rellena de pollo y un refrescante chicha morada casera.',
      content: 'Lomo saltado, papas fritas, arroz, causa limeña, chicha morada',
      url: 'https://lasdeliciasdelperu.wordpress.com/wp-content/uploads/2014/11/seco.jpg',
      price: 20
    },
    {
      name: 'Menú Parrillero',
      description:
        'Para los amantes de la parrilla, ofrecemos un menú con un jugoso corte de carne a la parrilla, chorizo argentino y una guarnición de ensalada mixta y papas doradas. Acompañado de una salsa chimichurri casera y una copa de vino tinto.',
      content:
        'Bife de chorizo, chorizo argentino, ensalada mixta, papas doradas, chimichurri, vino tinto',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23pj8g2a7gCvG1Bj2QmrEIcRMmDDZKKfocg&s',
      price: 25
    },
    {
      name: 'Menú Vegetariano',
      description:
        'Un menú saludable y lleno de sabor. Incluye una hamburguesa de lentejas con pan integral, acompañada de una ensalada fresca con aderezo de mostaza y miel. De postre, un bowl de frutas con yogurt natural.',
      content:
        'Hamburguesa de lentejas, pan integral, ensalada verde, aderezo de mostaza y miel, bowl de frutas, yogurt natural',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMqzB-DCUlCvf9Q5hI_J8pcE4bTUbY7KQ0Sb0LLhzlN3S2c84WsEunftIy5A-wcy9cgk&usqp=CAU',
      price: 17
    }
  ],
  helados: [
    {
      name: 'Helado de Chocolate',
      description:
        'Sumérgete en el intenso sabor del chocolate belga con nuestro exquisito helado artesanal. Su textura cremosa y su equilibrio entre dulzura y amargura lo convierten en una delicia irresistible. Cada cucharada está elaborada con ingredientes seleccionados, como cacao de alta calidad, leche fresca y crema batida, garantizando un postre perfecto para los verdaderos amantes del chocolate.',
      content: 'Chocolate belga, leche fresca, crema de leche, azúcar de caña',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuL7Qoun_AVioK1yqD7hIz3PmV41qB0MIk5g&s',
      price: 5
    },
    {
      name: 'Helado de Fresa',
      description:
        'Disfruta de la frescura y dulzura natural de las fresas en cada bocado de nuestro helado artesanal. Preparado con fresas seleccionadas y un toque de vainilla, este helado tiene un sabor suave y refrescante que te hará sentir en verano con cada cucharada. Su textura cremosa y los pequeños trozos de fruta lo convierten en una opción deliciosa y saludable.',
      content: 'Fresa natural, leche pasteurizada, azúcar, esencia de vainilla',
      url: 'https://comedera.com/wp-content/uploads/sites/9/2022/04/Helado-de-fresas-casero-shutterstock_1477385882.jpg',
      price: 5
    }
  ],
  hamburguesas: [
    {
      name: 'Hamburguesa Clásica',
      description:
        'Nuestra Hamburguesa Clásica es una combinación perfecta de ingredientes frescos y carne jugosa a la parrilla. Servida en un suave pan brioche, cada mordida revela el delicioso sabor de la carne de res Angus, acompañada de queso cheddar derretido, lechuga crujiente, rodajas de tomate fresco y mayonesa casera. Un equilibrio de sabores y texturas que la convierten en un clásico irresistible.',
      content:
        'Pan brioche artesanal, carne de res Angus, queso cheddar, lechuga, tomate, mayonesa casera',
      url: 'https://jetextramar.com/wp-content/uploads/2021/07/congelados-receta-de-hamburguesa-de-ternera.jpg',
      price: 8
    },
    {
      name: 'Hamburguesa BBQ',
      description:
        'Déjate seducir por el sabor ahumado y ligeramente dulce de nuestra Hamburguesa BBQ. La carne de res a la parrilla se baña en una salsa BBQ casera, realzando su jugosidad y sabor. Acompañada de cebolla caramelizada, queso suizo y pan artesanal tostado, esta hamburguesa ofrece un equilibrio perfecto entre lo dulce y lo salado, con una textura suave y jugosa en cada bocado.',
      content:
        'Pan artesanal tostado, carne de res, salsa BBQ casera, cebolla caramelizada, queso suizo',
      url: 'https://static.wixstatic.com/media/29cc8e_219aec38f9bb4a2782818d8116d7da41~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/29cc8e_219aec38f9bb4a2782818d8116d7da41~mv2.jpg',
      price: 9
    }
  ]
}

const Menu = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber)
  }

  return (
    <div className='bg-[#161718] overflow-x-hidden pt-[160px] md:pt-80 h-screen relative'>
      <h4
        style={{ fontFamily: 'fantasy' }}
        className='md:text-6xl text-2xl text-center text-yellow-100 tracking-widest font-light'
      >
        SABOR EXPRESS
      </h4>
      <h4 className='md:text-5xl w-fit m-auto border-yellow-300 border-b-2 text-2xl text-center text-yellow-300 font-bold'>
        Nuestra Carta
      </h4>
      <div className='flex justify-center mt-4 gap-4 md:gap-10 mb-4'>
        <button
          className={
            activeTab === 1
              ? 'tab-active text-yellow-300 text-xs md:text-lg py-2 border-yellow-300 border-double border-b-4'
              : 'tab text-yellow-50 text-xs md:text-lg'
          }
          onClick={() => handleTabClick(1)}
        >
          <FaUtensils className='inline-block mr-2' /> Menu
        </button>
        <button
          className={
            activeTab === 2
              ? 'tab-active text-yellow-300 text-xs md:text-lg py-2 border-yellow-300 border-double border-b-4'
              : 'tab text-yellow-50 text-xs md:text-lg'
          }
          onClick={() => handleTabClick(2)}
        >
          <FaIceCream className='inline-block mr-2' /> Helados
        </button>
        <button
          className={
            activeTab === 3
              ? 'tab-active text-yellow-300 text-xs md:text-lg py-2 border-yellow-300 border-double border-b-4'
              : 'tab text-yellow-50 text-xs md:text-lg'
          }
          onClick={() => handleTabClick(3)}
        >
          <FaHamburger className='inline-block mr-2' /> Hamburguesas
        </button>
      </div>

      <div className='bg-[#161718]'>
        {['comidas', 'helados', 'hamburguesas'].map(
          (category, index) =>
            activeTab === index + 1 && (
              <div key={category} className='content-food mt-20'>
                {itemsFood[category].map((data, idx) => (
                  <Food
                    key={idx}
                    name={data.name}
                    description={data.description}
                    content={data.content}
                    url={data.url}
                    price={data.price}
                  />
                ))}
              </div>
            )
        )}
      </div>
      <img
        src='https://i.ytimg.com/vi/H6lgxgEWIs8/maxresdefault.jpg'
        alt=''
        className='absolute w-[250px] h-[250px] left-[-100px] top-[-100px] border-8 md:w-[650px] md:h-[650px] md:top-[-300px] md:left-[-100px] md:border-[15px] border-yellow-300 rounded-full z-10'
      />
      <img
        src='https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg'
        alt=''
        className=' absolute w-[250px] h-[250px] left-[80px] top-[-150px] border-8 md:w-[650px] md:h-[650px] md:top-[-380px] md:left-[350px] md:border-[15px] border-yellow-300 rounded-full'
      />
      <ButtonCar />
      <Footer></Footer>
    </div>
  )
}

export default Menu
