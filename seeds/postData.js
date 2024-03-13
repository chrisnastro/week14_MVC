const { Post } = require("../models");

const postData = [
    {
        title: "The Empire",
        content: "Emperor passes secret new bill Order 66",
        user_id: 4,
    },
    {
        title: "The Force",
        content: "A bunch of malarky is you ask me",
        user_id: 1,
    },
    {
        title: "How to Build a Lightsaber",
        content: "Find a Kyber crystal you must",
        user_id: 5,
    },
];

module.exports = seedPosts;