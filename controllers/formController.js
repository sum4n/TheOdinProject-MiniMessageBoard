const formGet = (req, res) => {
  res.render("pages/form", {
    title: "Create new message",
  });
};

// Import messages;
const messages = require("./indexController").messages;

const fromPost = (req, res) => {
  const text = req.body.message_text;
  const user = req.body.user;

  // Add new message.
  messages.push({ text, user, added: new Date() });

  // Redirect to index page.
  res.redirect("/");
};

module.exports = { formGet, fromPost };
