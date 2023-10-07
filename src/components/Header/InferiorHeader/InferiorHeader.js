const InferiorHeader = () => {
  return (
    <div className="flex text-black px-4 text-xs border-b border-gray-300 bg-gray-100 pt-1">
        <a href="#" className="block md:hidden py-2 font-bold">
            <i className="fa fa-chevron-left"></i>Todos os Departamentos
        </a>
        <ul className="hidden md:flex">
            <li className="item-nav-inf">
                <a href="#">Livros</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">Pesquisa Avançada</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">Mais Vendidos</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">Pré-venda e Lançamentos</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">Livros em Ofertas</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">Inglês e Outras Línguas</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">Lojas Geek</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">Universitários e Acadêmicos</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">DIdáticos e Escolares</a>
            </li>
            <li className="item-nav-inf">
                <a href="#">Loja Infantil</a>
            </li>
            
        </ul>
    </div>
  )
}

export default InferiorHeader