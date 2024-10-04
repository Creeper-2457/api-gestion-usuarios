const express = require('express');
const app = express();
app.use(express.json());

const users = require('./users');

app.get('/users', users.getUsers);
app.post('/users', users.createUser);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

