import express from 'express'
const app = express()

//indicar para o express ler body com json
app.use(express.json())

//mock
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'g' },
    { id: 2, selecao: 'Suiça', grupo: 'g' },
    { id: 3, selecao: 'Servia', grupo: 'g' },
    { id: 4, selecao: 'Camaroes', grupo: 'g' }
]

// criar rota padrão
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso')
})
export default app