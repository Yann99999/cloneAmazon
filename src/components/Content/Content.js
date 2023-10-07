import LeftNavBar from "./LeftNavBar/LeftNavBar"
import Banner from "./Banner/Banner"
import Categories from "./Categories/Categories"
import Catalogue from "./Catalogue/Catalogue"

const Content = () => {
  return (
    <main>
        <div className='grid grid-cols-6'>
            <div className='col-span-1'>
                <LeftNavBar/>
            </div>
            <div className='col-span-6 md:col-span-5 p-2'>
              <div className="flex flex-col">
                <div className="text-center">
                  <h2 className="text-2xl font-bold md:text-3xl md:font-normal">Loja de Livros</h2>
                  <ul className="flex flex-wrap md:flex-no-wrap justify-center text-sm px-4 md:px-0 pb-2 md:mt-2">
                      <li>
                        <a href="#" className="link-main-list">Livros em Oferta</a>
                      </li>
                      <li>
                        <a href="#" className="link-main-list">Importados</a>
                      </li>
                      <li>
                        <a href="#" className="link-main-list">Lançamentos</a>
                      </li>
                      <li>
                        <a href="#" className="link-main-list">Universitários</a>
                      </li>
                      <li>
                        <a href="#" className="link-main-list">Didáticos e Escolares</a>
                      </li>
                      <li>
                        <a href="#" className="link-main-list">HQs e Mangás</a>
                      </li>
                      <li>
                        <a href="#" className="link-main-list">Mais Vendidos</a>
                      </li>
                      <li>
                        <a href="#" className="link-main-list">Livros Infantis</a>
                      </li>
                      <li>
                        <a href="#" className=" text-blue-600 underline hover:text-orange-650 px-1">Indicações</a>
                      </li>
                  </ul>
                  <div className="h-2 border=b shadow-md"></div>
                </div>
                <Banner/>
                <Categories/>
                <Catalogue/>
              </div>
            </div>
        </div>
    </main>
  )
}

export default Content
