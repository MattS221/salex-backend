const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//Adicionando Cors para rotas do client
app.use(cors({ origin: 'http://station.salere' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./src/controllers/index')(app);

app.listen(process.env.PORT || 3333);