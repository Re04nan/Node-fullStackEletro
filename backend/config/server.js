const express = require('express');
const cors = require('cors');
const connMysql = require('./databaseMysql');
const connMongo = require('./databaseMongo');
const Comentarios = require('../models/Comment');
const product = require('../models/Product');
const historicSold = require('../models/Historic-sold');
const order = require('../models/Order');
const register = require('../models/Register');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/Contatos", async (req, res) => {
    const {nome, msg} = req.body;
    if (!nome == "" && !msg == ""){
        let resultado = await Comentarios.create({nome, mensagem : msg})
        res.json(resultado = {resultado: true});
    } else {
        res.json({resultado: false});
    }
})
app.get("/Comentarios", async (req, res) => {
    let resultado = await Comentarios.find();
    res.json(resultado);
})

app.get("/Produtos", (req, res) => {
    connMysql.query(product, (err, result) => {
        res.status(200).json(result ? result:err);
    });
});
app.get("/Pedidos/:id", (req, res) => {
    const { id } = req.params;
    connMysql.query(order + id, (err, result) => {
        res.status(200).json(result ? result:err);
    });
});
app.post("/Registrar", (req, res) => {
    const {quantidade, total, nome, telefone, endereco, id} = req.body;
    
    //res.send([quantidade, total, nome, telefone, endereco, id])
    connMysql.query(register + `(${quantidade}, ${total}, '${nome}', ${telefone}, '${endereco}', ${id})`, 
    (err, result) => {
        res.status(201).json(result? result:err);
    });
});
app.get("/", (req, res) =>{
    connMysql.query(historicSold, (err, result) => {
            res.status(200).json(result ? result:err);
    })
});

app.listen(3002, () => console.log("Servidor Ativo!"));
