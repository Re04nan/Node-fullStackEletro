const mongoose = require('mongoose');

function connection () {
    mongoose.connect("mongodb://localhost/comment", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log("Conexão realizada com sucesso! - MongoDB");
    })
    .catch((error)=>{
        console.log(error);
    });
}

module.exports = connection();