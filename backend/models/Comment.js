const { Schema, model} = require('mongoose');

const MsgSchema = new Schema({
    nome: {
        type: String
    },
    mensagem: {
        type: String
    },
    data_registro: {
        type: Date,
        default: new Date()
    }
})
const modelo = model("comentarios", MsgSchema);
module.exports = modelo;