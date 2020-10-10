// passo-a-passo

// 1: importar o JSON de livros
// 2: criar o método para buscar todos os livros
// 3: exportar o método

// ./ retorna arquivos ou pastas do mesmo diretório
// ../ retorna arquivos ou pastas de um diretório acima
// ../../ subir mais um nível e quando mais você colocar mais níveis vai subindo

const livros = require('../model/livros.json');

const getAll = (req, res) => {
    console.log(req.url);
    // verifica se a resposta tem status 200 (sucesso) e envia o JSON
    res.status(200).send(livros);
} 

// passo-a-passo

// 1: criar método getByID
// 2: retornar o item daquele ID
// filter ele vai buscar todos os itens que passar na validação
// nesse caso aqui o ideal é que o ID seja único e vai retornar
// então o melhor é usar o método find, porque ele vai retornar o primeiro item que ele achar naquela condição

const getByID = (req, res) => {
    const id = req.params.id

    // método find retorna o primeiro elemento que passa na condição
    const livroFiltrado = livros.find((livro) => livro.id == id)

    res.status(200).send(livroFiltrado)
}

module.exports = { getAll, getByID }