const getUsers = (request, response) => {
    //get all users
};
const getUser = (request, response) => {
    //get a user
};
const createUser = (request, response) => {
    response.status(201);
    response.send(request.body);
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