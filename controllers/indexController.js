const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const getIndexMessages = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();
  // console.log(messages);
  res.render("pages/index", {
    title: "Mini Messageboard",
    messages,
  });
});

const getSpecificMessage = asyncHandler(async (req, res) => {
  const message = await db.getSpecificMessage(req.body.id);
  // console.log(message[0]);
  res.render("pages/message", {
    title: "Message",
    message: message[0],
  });
});

module.exports = { getIndexMessages, getSpecificMessage };
