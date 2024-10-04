
let userList = [];

exports.getUsers = (req, res) => {
    res.json(userList);
};

exports.createUser = (req, res) => {
    const newUser = req.body;
    userList.push(newUser);
    res.status(201).send(newUser);
};
module.exports = { getUsers,createUser};
