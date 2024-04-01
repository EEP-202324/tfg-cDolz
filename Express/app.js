const express = require('express');

require('dotenv').config();

const app = express();

// Config
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// /api/login
app.use('/api', require('./routes/api'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
});