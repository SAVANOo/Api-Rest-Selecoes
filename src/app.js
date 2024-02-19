import express from 'express'
const app = express()

//indicar para o express ler body com json
app.use(express.json())

//mock
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'g' },
    { id: 2, selecao: 'Suiça', grupo: 'g' },
    { id: 3, selecao: 'Camaroes', grupo: 'g' },
    { id: 4, selecao: 'Servia', grupo: 'g' }
]

function buscarSelecaoPorID(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// criar rota padrão
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorID(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id);
    selecoes.splice(index, 1);
    res.send(`Selecao com id ${req.params.id} excluida com sucesso`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id);
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.send(selecoes)  
})


export default app