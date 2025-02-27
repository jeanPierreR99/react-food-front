const Footer = () => {
  return (
    <footer className='bg-[#373632] text-white text-center py-4'>
      <p className='text-xs md:text-sm'>
        &copy; {new Date().getFullYear()} Sabor Express.
        <br />
        Todos los derechos reservados.
      </p>
      <nav className='mt-2'>
        <ul className=' hidden md:flex justify-center space-x-4 text-xs md:Text-sm'>
          <li>
            <a href='' className='hover:underline'>
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href='' className='hover:underline'>
              Contacto
            </a>
          </li>
          <li>
            <a href='' className='hover:underline'>
              Política de Privacidad
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
