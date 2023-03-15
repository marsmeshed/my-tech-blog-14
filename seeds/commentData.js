
const { Comment } = require("../models");

const commentData = [
  {
    "comment_content": "Hey!",
    "user_id": 2,
    "post_id": 1
  },
  {
    "comment_content": "Wow! This is great.",
    "user_id": 2,
    "post_id": 2
  },
  {
    "comment_content": "Nice job!",
    "user_id": 3,
    "post_id": 3
  },
  {
    "comment_content": "Which games?",
    "user_id": 1,
    "post_id": 3
  },
];

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;