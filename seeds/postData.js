const { Post } = require("../models");

const postData = [
    {
        title: "The Empire",
        content: "Emperor passes secret new bill Order 66",
        user_id: 1,
    },
    {
        title: "The Force",
        content: "A bunch of malarky if you ask me",
        user_id: 2,
    },
    {
        title: "How to Build a Lightsaber",
        content: "Find a Kyber crystal you must",
        user_id: 3,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;