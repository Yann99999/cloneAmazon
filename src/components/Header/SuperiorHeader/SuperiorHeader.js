import logo from '../../../assets/img/amazon_logo.png'

const SuperiorHeader = () => {
    return (
        <div className="flex flex-wrap md:flex-no-wrap bg-darkblue-900 px-2 py-1 items-center">
            <div className="py-1 px-2 md:border broder-gray-700 hover:border-white rounded">
                <i className="fas fa-bars text-2xl"></i>
            </div>
            <div className="flex mx-2 py-2 border border-transparent hover:border-white">
                <img src={logo} alt="Logo da Amazon" className="h-7"/>
                    <span className="text-xs pl-1 pt-1">.com.br</span>
            </div>
            <div className="w-full md:w-auto flex-grow md:ml-3 mr:0 pt-1 order-2 md:order-none">
                <form action="" className="flex">
                    <select name="" id="" className="hidden md:block p-2 text-xs text-gray-700 bg-gray-100 hover:bg-gray-300 rounded-tl rounded-bl border-r border-gray-500">
                        <option value="">Livros</option>
                    </select>
                    <input type="text" className="p-2 flex-grow rounded-l md:rounded-none"/>
                        <button className="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br">
                            <i className="fas fa-search text-darkblue-900 text-xl mt-1"></i>
                        </button>
                </form>
            </div>
            <div className="item-nav-sup">
                <p className="leading-3">Olá, Faça seu login</p>
                <p className="font-extrabold">Contas e Listas <i className="fas fa-chevron-down"></i></p>
            </div>
            <div className="item-nav-sup">
                <p className="leading-3">Devoluções</p>
                <p className="font-extrabold">e Pedidos</p>
            </div>
            <div className="item-nav-sup">
                <p className="leading-3">Experimente</p>
                <p className="font-extrabold">Prime <i className="fas fa-chevron-down"></i></p>
            </div>
            <div className="p-2 border border-transparent hover:border-white rounded-sm absolute right-0 top-0 mr-2 mt-2 md:mr-0 md:t-0 md:relative order-1 md:order-none md:flex">
                <i className="fas fa-shopping-cart flex text-2xl md:mr-2"></i>
                <span className="bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4 text-center w-6 h-6 bg-darkblue-600 rounded-full">0</span>
                <span className="hidden md:flex text-xs font-extrabold">Carrinho</span>
            </div>
        </div>
    )
}
export default SuperiorHeader