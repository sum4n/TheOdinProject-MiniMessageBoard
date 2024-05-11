const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

// Get form page
router.get("/new", function (req, res) {
  res.render("form");
});

// Post form
router.post("/new", function (req, res) {
  // Add new message to messages array
  messages.push({
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  });

  // Redirect to home page to after submitting message
  res.redirect("/");
});

module.exports = router;
