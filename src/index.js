const express = require('express');
const app = express();
const { getUsers, createUser } = require('./users');
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

