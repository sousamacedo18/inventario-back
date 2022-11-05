
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
const rotaUsuarios = require('./routes/rotaUsuarios');
const rotaPatrimonio = require('./routes/rotaPatrimonio');
const rotaEmpresa = require('./routes/rotaEmpresa');
const rotaLotacao = require('./routes/rotaLotacao');
app.use('/usuario',rotaUsuarios);
app.use('/patrimonio',rotaPatrimonio);
app.use('/empresa',rotaEmpresa);
app.use('/lotacao',rotaLotacao);
module.exports = app;