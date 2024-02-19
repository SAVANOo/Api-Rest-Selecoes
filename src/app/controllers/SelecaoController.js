import conexao from '../database/conexao.js'

class SelecaoController {
    index(req, res) {
        const sql = 'SELECT * FROM`bd-copa`.selecoes'
        conexao.query(sql, (error, result) => {
            if (error) {
                console.log(error)
                res.status(404).json({ 'erro': error })
            } else {
                res.status(200).json(result)
            }
        })
    }

    store(req, res) {
        const selecao = req.body;
        const sql = 'INSERT INTO selecoes SET ?;'
        conexao.query(sql, selecao, (error, result) => {
            if (error) {
                console.log(error)
                res.status(404).json({ 'erro': error })
            } else {
                res.status(201).json(result)
            }
        })
    }

    show(req, res) {
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

    }

    update(req, res) {
        const id = req.params.id;
        const selecao = req.body;
        const sql = 'UPDATE selecoes SET ? WHERE id = ?;'
        conexao.query(sql, [selecao, id], (error, result) => {
            if (error) {
                console.log(error)
                res.status(404).json({ 'erro': error })
            } else {
                res.status(201).json(result)
            }
        })
    }

    delete(req, res) {
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
    }
}
export default new SelecaoController();
