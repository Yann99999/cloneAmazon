import Links from "./Links/Links"

const SuperiorFooter = () => {
    return (
        <>
            <div className="py-4 text-center bg-darkblue-600 hover:bg-darkblue-500 text-sm">
                <p>Volta ao Início</p>
            </div>
            <div className="flex flex-wrap md:flex-no-wrap md:justify-around py-10 px-10 md:px-20 bg-darkblue-700">
                <Links title='Conheça-nos' links={['Informações Corporativas', 'Carreiras', 'Comunicados à Imprensa', 'Comunidades']}/>
                <Links title='Ganhe Dinheiro Conosco' links={['Publique sues livros', 'Seja um associado', 'Venda na Amazon']}/>
                <Links title='Conheça-nos' links={['Sua conta', 'Frete e prazo de entrega', 'Devoluções e reembolsos', 'Gerencie seu conteúdo e dispositivos', 'Ajuda']}/>
                <Links title='Pagamentos' links={['Amazon e COVID-19', 'Cartões de crédito e Boleto']}/>
            </div>
        </>
    )
}

export default SuperiorFooter