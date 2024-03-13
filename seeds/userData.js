const { User } =require("../model");

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
    },
    {
        username: "DVader",
        email: "DVader@mustafar.com",
        password: "noooooo0",
    },
    {
        username: "Yoda",
        email: "dotcom@yoda.com",
        password: "jed1master",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;