
let { livros, identificadorLivro } = require('../BancoDeDados/bancoDeDados')


const listarLivros = (req, res) => {
    res.status(200).send(livros)
}

const consultarLivro_Id = (req, res) => {
    const { id } = req.params

    const encontrarLivro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (id === String("") || id === String(" ")) {
        res.status(400).json({ message: "Por favor entre com um id valido" });
    }

    if (id != Number(id)) {

        res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }

    if (!encontrarLivro) {
        return res.status(404).json({ message: "Livro nao localizado" })
    }

    res.status(200).send(encontrarLivro)
}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ message: "Todos os campos dever ser preenchidos" })
    }

    const encontrarLivro = livros.find((livro) => {
        return livro.titulo === String(titulo)
    })

    if (encontrarLivro) {
        return res.status(400).json({ message: "Livro ja cadastrado" })
    }

    let book = {
        id: identificadorLivro++,
        titulo: titulo,
        autor: autor,
        ano: Number(ano),
        numPaginas: Number(numPaginas)
    }

    livros.push(book)

    res.status(204).json()

}

const atualizarLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!id || !titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ message: "Todos os campos dever ser preenchidos" })
    }

    const encontrarLivro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!encontrarLivro) {
        return res.status(404).json({ message: "Livro nao localizado" })
    }

    encontrarLivro.titulo = titulo,
        encontrarLivro.autor = autor,
        encontrarLivro.ano = Number(ano),
        encontrarLivro.numPaginas = Number(numPaginas)

    res.status(200).json({ mensagem: "Livro substituído." })

}

const atualizarCampoDoLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo && !autor && !ano && !numPaginas) {
        return res.status(400).json({ message: "Todos os campos dever ser preenchidos" })
    }

    const encontrarLivro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!encontrarLivro) {
        return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." })
    }

    if (titulo) { encontrarLivro.titulo = titulo }
    if (autor) { encontrarLivro.autor = autor }
    if (ano) { encontrarLivro.ano = Number(ano) }
    if (numPaginas) { encontrarLivro.numPaginas = Number(numPaginas) }

    res.status(200).json({ mensagem: "Livro alterado." })

}

const removerLivro = (req, res) => {
    const { id } = req.params

    const encontrarLivro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    const livroRemovido = livros.filter((livro) => {
        return livro.id !== Number(id);
    })



    if (id === String("") || id === String(" ")) {
        return res.status(400).json({ message: "Por favor entre com um id valido" });
    }

    if (id != Number(id)) {

        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }

    if (!encontrarLivro) {
        return res.status(404).json({ message: "Não existe livro a ser removido para o ID informado." })
    }

    livros = livroRemovido;

    res.status(200).json({ message: "Livro removido." })
}






module.exports = {
    listarLivros,
    consultarLivro_Id,
    adicionarLivro,
    atualizarLivro,
    atualizarCampoDoLivro,
    removerLivro
}