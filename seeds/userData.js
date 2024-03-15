const { User } = require("../models");

const userData = [
    {
        username: "HSolo",
        email: "HSolo@milleniumfalcon.com",
        password: "iknow1",
    },
    {
        username: "LSkywalker",
        email: "LSkywalker@tatooine.com",
        password: "powerconverters1",
    },
    {
        username: "LOrgana",
        email: "LOrgana@alderaan.com",
        password: "neverforget1",
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;