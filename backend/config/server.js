const express = require('express');
const cors = require('cors');
const conn = require('./database');
const product = require('../models/Product');
const historicSold = require('../models/Historic-sold');
const order = require('../models/Order');
const register = require('../models/Register');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/Produtos", (req, res) => {
    conn.query(product, (err, result) => {
        res.status(200).json(result ? result:err);
    });
});
app.get("/Pedidos/:id", (req, res) => {
    const { id } = req.params;
    conn.query(order + id, (err, result) => {
        res.status(200).json(result ? result:err);
    });
});
app.post("/Registrar", (req, res) => {
    const {quantidade, total, nome, telefone, endereco, id} = req.body;
    
    //res.send([quantidade, total, nome, telefone, endereco, id])
    conn.query(register + `(${quantidade}, ${total}, '${nome}', ${telefone}, '${endereco}', ${id})`, 
    (err, result) => {
        res.status(201).json(result? result:err);
    });
});
app.get("/", (req, res) =>{
    conn.query(historicSold, (err, result) => {
            res.status(200).json(result ? result:err);
    })
});

app.listen(3002, () => console.log("Servidor Ativo!"));
