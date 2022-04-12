const { green, red } = require("chalk");
const { db, Post, User } = require("./server/db");

const posts = [
  {
    content: "this day rocks",
    userId: 1,
  },
  {
    content: "I could use some more sun",
    userId: 2,
  },
  {
    content: "This clouds are bummers",
    userId: 3,
  },
];

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    userName: "jDoe",
    email: "jdoe@gmail.com",
    password: "hellohello",
  },
  {
    firstName: "Carol",
    lastName: "Kane",
    userName: "kKane",
    email: "kane@gmail.com",
    password: "hellohello",
  },
  {
    firstName: "Susie",
    lastName: "Quu",
    userName: "susieQ",
    email: "susieQ@gmail.com",
    password: "hellohello",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    await Promise.all(
      posts.map((post) => {
        return Post.create(post);
      })
    );

    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
