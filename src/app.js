import express from 'express'
import conexao from '../infra/conexao.js'
const app = express()

//indicar para o express ler body com json
app.use(express.json())

function buscarSelecaoPorID(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

//  ROTAS
app.get('/selecoes', (req, res) => {
    const sql = 'SELECT * FROM`bd-copa`.selecoes'
    conexao.query(sql, (error, result) => {
        if (error) {
            console.log(error)
            res.status(404).json({ 'erro': error })
        } else {
            res.status(200).json(result)
        }
    })
})

app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM`bd-copa`.selecoes where ID=?'
    conexao.query(sql, id, (error, result) => {
        if (error) {
            console.log(error)
            res.status(404).json({ 'erro': error })
        } else {
            res.status(200).json(result[0])
        }
    })

})

app.post('/selecoes', (req, res) => {
    const selecao = req.body;
    const sql = 'INSERT INTO selecoes SET ?;'
    conexao.query(sql, selecao, (error, result) => {
        if (error) {
            console.log(error)
            res.status(400).json({ 'erro': error })
        } else {
            res.status(201).json(result)
        }
    })
})

app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM`bd-copa`.selecoes where ID=?'
    conexao.query(sql, id, (error, result) => {
        if (error) {
            console.log(error)
            res.status(404).json({ 'erro': error })
        } else {
            res.status(200).json(result)
        }
    })
})

app.put('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const selecao = req.body;
    const sql = 'UPDATE selecoes SET ? WHERE id = ?;'
    conexao.query(sql, [selecao, id], (error, result) => {
        if (error) {
            console.log(error)
            res.status(400).json({ 'erro': error })
        } else {
            res.status(201).json(result)
        }
    })
})


export default app