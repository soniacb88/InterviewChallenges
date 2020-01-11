const express = require("express");
const app = express();
const data = require('./phones.json')

app.get('/phones', function (req, res) {
    res.send(JSON.stringify(data));
});
 
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

