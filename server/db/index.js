const db = require("./database");
const User = require("./user");
const Post = require("./post");

//

Post.belongsTo(User);
User.hasMany(Post);
module.exports = {
  // Include your models in this exports object as well!
  db,
  User,
  Post,
};
