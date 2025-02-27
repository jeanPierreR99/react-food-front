const Links = ({text})=>{

    return (
    <li className='py-4 px-6 sm:border-b-2 border-transparent hover:border-yellow-200 sm:hover:text-yellow-200 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent'>
        <a className="font-serif select-none text-sm  tracking-widest text-yellow-50">{text}</a>
        </li>
        )
}
export default Links;