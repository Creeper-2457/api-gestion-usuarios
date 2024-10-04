
let userList = [];

const createUser = (req, res) => {
    const user = req.body;
    if (!user.name || !user.age) {
        return res.status(400).json({ error: 'Nombre y edad son requeridos' });
    }
    users.push(user);
    res.status(201).json(user);
};

exports.createUser = (req, res) => {
    const newUser = req.body;
    userList.push(newUser);
    res.status(201).send(newUser);
};
module.exports = { getUsers,createUser};
