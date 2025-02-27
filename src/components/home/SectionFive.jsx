import { Card2 } from './SectionCard'
export const SectionFive = () => {
  const items = [
    {
      type: 'HELADO',
      title: 'Ciruela',
      description:
        'Deléitate con nuestro helado de ciruela, una explosión de sabor dulce y refrescante en cada cucharada. Perfecto para satisfacer tus antojos en cualquier momento del día.',
      image:
        'https://thecampanile.org/wp-content/uploads/2017/02/icicles-900x600.jpg',
      price: 's/8.00'
    },
    {
      type: 'HAMBURGUESA',
      title: 'Carnivoro',
      description:
        'Sumérgete en una experiencia gastronómica carnívora con nuestra hamburguesa Carnívoro. Jugosa carne, crujiente lechuga y delicioso queso, todo entre dos suaves panes.',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg',
      price: 's/12.00'
    },
    {
      type: 'MENÚ',
      title: 'Arroz a la cubana',
      description:
        'Disfruta de un clásico de la cocina con nuestro delicioso Arroz a la Cubana. Arroz blanco, plátano frito, huevo y salsa de tomate.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU',
      price: 's/10.00'
    },
    {
      type: 'MENÚ',
      title: 'Patarashca',
      description:
        'Sumérgete en los sabores de la selva con nuestra exquisita Patarashca. Pescado fresco sazonado con especias auténticas, envuelto en hojas de bijao y cocido a la perfección.',
      image:
        'https://3.bp.blogspot.com/-KduVmYhNgdg/UnR1rWA3YxI/AAAAAAAAC5g/wmfspe4M9Eo/w1200-h630-p-k-no-nu/como+preparo+una+patarashca+-+comida+de+la+selva.jpg',
      price: 's/18.00'
    },
    {
      type: 'MENÚ',
      title: 'Arroz con pollo',
      description:
        'Deléitate con nuestro suculento Arroz con Pollo, una combinación perfecta de arroz cocido en su propio jugo con tiernos trozos de pollo.',
      image:
        'https://sazonadoresbatan.com/wp-content/uploads/2020/08/Arroz-con-pollo.png',
      price: 's/22.00'
    },
    {
      type: 'HAMBURGUESA',
      title: 'Royal',
      description:
        'Corona tu día con nuestra hamburguesa Royal. Dos jugosas carnes de res acompañadas de queso cheddar, tocino crujiente, lechuga fresca y nuestra salsa especial.',
      image:
        'https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2F727b9dfb5b87e67551a2332f638b9891%2F3d3e3280-63cb-11ec-94a4-afafabb9387c?alt=media&token=f0017c1f-32d4-495f-9bb9-f3efbb50425a',
      price: 's/15.00'
    }
  ]

  return (
    <div className='w-full bg-[#161718] relative'>
      <div className='w-10/12 text-yellow-50 pt-20 flex flex-col items-center gap-6 pb-40 m-auto'>
        <span className='text-yellow-200 font-serif font-bold text-sm  tracking-widest'>
          NUESTRA CARTA
        </span>
        <img src='../../images/separator.svg' alt='' className='h-4 w-fit' />
        <h4 className='md:text-5xl text-center text-2xl font-light'>
          ¡Cada plato es una aventura de sabor!
        </h4>
        <div className='z-[10] flex md:flex-row flex-col md:gap-4 gap-20 font-light leading-6 text-sm mt-8'>
          <div className='left md:w-6/12  w-full md:border-r border:none md:pr-5 flex flex-col gap-20'>
            {items.map((item, index) =>
              index < 3 ? (
                <Card2
                  key={index}
                  type={item.type}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                ></Card2>
              ) : (
                ''
              )
            )}
          </div>
          <div className='right md:w-6/12 md:pl-2  w-full flex flex-col gap-20'>
            {items.map((item, index) =>
              index > 2 ? (
                <Card2
                  key={index}
                  type={item.type}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                ></Card2>
              ) : (
                ''
              )
            )}
          </div>
        </div>
        <a href='/menu' className='z-[10]'>
          <button className='text-yellow-100 border w-fit m-auto px-6 py-3 duration-500 ease-in hover:bg-yellow-200 hover:text-black text-sm font-serif'>
            VER TODA LA CARTA
          </button>
        </a>

        <img
          src='../../images/fondo-utensilios-cocina-dibujados-mano-pizarra-iconos-vectoriales-estilo-boceto-blanco-negro_624018-25.avif'
          alt=''
          className=' absolute w-full h-[80%] bottom-0 right-0 opacity-5 z-[1]'
        />
      </div>
    </div>
  )
}
