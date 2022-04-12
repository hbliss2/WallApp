const Sequelize = require("sequelize");
const db = require("./database");

const Post = db.define("post", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Post;
