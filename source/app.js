const express = require('express');
const app = express();

//seteao de ejs como motor de plantilla
// de esta forma le decimos a express quiero que internamente cree una variable de entorno
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(require('./routes/products'))

app.listen(8000, () => console.log("Servidor iniciado en puerto 8000"));