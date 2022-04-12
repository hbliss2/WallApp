const router = require("express").Router();
const { Post, User } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const retrievePosts = await Post.findAll({ include: [User] });
    res.send(retrievePosts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
