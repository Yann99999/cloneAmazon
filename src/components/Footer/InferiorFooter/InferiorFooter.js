const InferiorFooter = () => {
  return (
    <div className="flex flex-col items-center bg-darkblue-950 text-xs pt-8 md:pt-2">
        <div className="flex flex-col md:flex-row mb-10">
            <ul className="flex">
                <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                    <a href="#">Condições de Uso</a>
                </li>
                <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                    <a href="#">Notificações de Privacidade</a>
                </li>
                <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                    <a href="#">Cookies</a>
                </li>
                <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                    <a href="#">Anúncios Baseados em Interesses</a>
                </li>
            </ul>
            <span className="text-center md:text-left mt-8 md:mt-0 ml-4 text-gray-600">&copy; Amazon.com, Inc. ou suas afiliadas.</span>
        </div>
        <p className="hidden md:block mb-10 text-gray-600">Amazon serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</p>
        <p className="hidden md:block mb-10 text-gray-600">Avenida Juscelino Kubischeck, 2041, Torre E, 18° andar - São Paulo <a href="#" className="text-blue-800">Fale Conosco</a></p>
        <p className="hidden md:block mb-10 text-gray-600">Formas de pagamento aceitas: cartões de crédito (Visa, Mastercard, Elo e American Express) e boletos.</p>
    </div>
  )
}

export default InferiorFooter