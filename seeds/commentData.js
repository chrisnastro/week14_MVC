const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "Never tell me the odds!",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "May the force be with you",
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: "Do or do not, there is no try",
        user_id: 5,
        post_id: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;