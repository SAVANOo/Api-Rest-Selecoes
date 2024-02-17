import express from 'express'
const app = express()

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

export default app