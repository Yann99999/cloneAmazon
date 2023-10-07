import List from './List/List'

const LeftNavBar = () => {
  return (
    <div className="col-span-1 hidden md:block pl-2 my-2 border-r border-gray-300 text-xs">
            <List
            title='Destaques em Livros'
            links={['Indicações Amazon', 'Inglês e Outras Línguas', 'Livros em Oferta', 
            'Destaque em Livros', 'Mais Vendidos do Mês', 'Pré-vendas e Lançamentos', 'Livros Exclusivos Amazon']}
            />
            <List
            title='Páginas Especiais'
            links={['Livros Clássicos', 'Livros Que Viraram Filmes', 'Livros Infantis', 
            'Loja Geek']}
            />
            <List
            title='Livros Educacionais'
            links={['Didáticos e Escolares', 'Estudo e Ensino de Idiomas', 'Exames e Concursos', 
            'Importados para Exames', 'Universitários e Acadêmicos']}
            />
            <List
            title='Kindle'
            links={['Acessórios Kindle', 'Comprar Kindle', 'eBooks em Inglês', 
            'eBooks em Oferta', 'Kindle Unlimited', 'Todos os eBooks']}
            />
        
    </div>
  )
}

export default LeftNavBar