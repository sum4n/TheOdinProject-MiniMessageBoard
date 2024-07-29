const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const formGet = (req, res) => {
  res.render("pages/form", {
    title: "Create new message",
  });
};

const postMessage = asyncHandler(async (req, res) => {
  const { message, username } = req.body;
  // console.log({ message, username });

  await db.insertMessage(username, message);

  res.redirect("/");
});

module.exports = { formGet, postMessage };
