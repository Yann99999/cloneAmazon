const Product = ({image, prevPrice, price, discount, title}) => {
  return (
    <div className='w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300'>
        <img src={image} alt={image} className='h-210px place-self-center p-2'/>
        <p className='text-red-700 mt-10'>R$ {price}</p>
        <p className='text-sm mb-2'>De: <span className='line-through'>R${prevPrice}</span> ({discount}% off)</p>
        <p className='text-xs text-gray-700 mb-2'>Termina em 2:09</p>
        <a href='#' className='text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2'>{title}</a>
        <p className='text-sm mb-8'>Esta oferta é exclusiva para membros do 
        <a href='#' className='text-blue-600 hover:underline hover:text-orange-650'> Amazon Prime</a>.</p>
        <button className='text-xs bg-gray-200 border border-gray-600 rounded-sm py-1'>Saiba Mais</button>

    </div>
  )
}

export default Product