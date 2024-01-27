const User = require("../models/users")

const getUsers = (request, response) => {
    //get all users
};
const getUser = (request, response) => {
    //get a user
};

//Создание пользователя
const createUser = (request, response) => {
    const data = request.body;
    User.create(data)
        .then(user => {
            response.status(201).send(user);
        })
        .catch(e => {
            response.status(500).send(e.message);
        });
};

const updateUser = (request, response) => {
    //update a user
};
const deleteUser = (request, response) => {
    //delete a user
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};