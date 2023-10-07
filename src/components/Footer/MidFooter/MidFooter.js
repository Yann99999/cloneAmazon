import logo from '../../../assets/img/amazon_logo.png'

const MidFooter = () => {
  return (
    <div className='hidden md:flex flex-col items-center bg-darkblue-700 border-t border-gray-700 pt-6 pb-4'>
        <img src={logo} alt='Logo da Amazon' className='w-20'/>
        <ul className='flex flex-wrap justify-center text-xs w-3/4 pt-4 text-gray-400'>
            <li className='countries-footer'>
                <a href='#'>Austália</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Alemanha</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Canadá</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>China</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Cingapura</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Espanha</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Estados Unidos</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>França</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Holanda</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Índia</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Itália</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Japão</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>México</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Emirados Árabes Unidos</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Reino Unido</a>
            </li>
            <li className='countries-footer'>
                <a href='#'>Turquia</a>
            </li>
        </ul>
        <div className='flex text-xs'>
            <span className='text-gray-600 mr-2'>E não se esqueça: </span>
            <a href='#' className='text-gray-400 hover:underline'>Amazon Web Services</a>
        </div>
    </div>
  )
}

export default MidFooter