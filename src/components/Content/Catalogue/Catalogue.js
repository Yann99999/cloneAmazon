import Product from "./Product/Product"
import livro1 from '../../../assets/img/livro1.jpg'
import livro2 from '../../../assets/img/livro2.jpg'
import livro3 from '../../../assets/img/livro3.jpg'
import livro4 from '../../../assets/img/livro4.jpg'
import livro5 from '../../../assets/img/livro5.jpg'
import livro6 from '../../../assets/img/livro6.jpg'
import livro7 from '../../../assets/img/livro7.jpg'
import livro8 from '../../../assets/img/livro8.jpg'

const Catalogue = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-between py-2 px-4 text-sm">
            <p>Mostrando 1-32 de 122 resultados</p>
            <div className="flex md:flex-none">
                <span>Ordenar por</span>
                <select className="bg-gray-300 pr-4 md:pr-12 ml-3 rounded-sm border border-gray-600 text-xs px-1">
                    <option>Destaques</option>
                </select>
            </div>
        </div>
        <div className="flex flex-wrap border border-gray-300 divide-x divide-gray-300 mb-10">
            <Product image={livro1} prevPrice='63,09' price='26,30' discount={58}
            title='Em Busca de Sentido'
            />
            <Product image={livro2} prevPrice='39,99' price='17,40' discount={56}
            title='Não Se Humilha, Não'
            />
            <Product image={livro3} prevPrice='34,99' price='17,40' discount={50}
            title='As Seis Lições'
            />
            <Product image={livro4} prevPrice='49,90' price='27,90' discount={44}
            title='Anne II'
            />
            <Product image={livro5} prevPrice='39,90' price='13,40' discount={66}
            title='Propósito - A Coragem de Ser Quem Somos'
            />
            <Product image={livro6} prevPrice='42,00' price='20,50' discount={51}
            title='A Morte de Ivan Illitch'
            />
            <Product image={livro7} prevPrice='37,90' price='10,40' discount={73}
            title='Outros Jeitos de Usar a Boca'
            />
            <Product image={livro8} prevPrice='119,90' price='55,90' discount={53}
            title='Nassim Nicholas Taleb - Kit Exclusivo Amazon'
            />
        </div>
    </div>
  )
}

export default Catalogue