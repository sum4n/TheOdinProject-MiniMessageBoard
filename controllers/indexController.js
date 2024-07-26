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

const getIndexMessages = (req, res) => {
  res.render("pages/index", {
    title: "Mini Messageboard",
    messages,
  });
};

const getSpecificMessage = (req, res) => {
  res.render("pages/message", {
    title: "Message",
    text: req.body.text,
    user: req.body.user,
    added: req.body.added,
  });
};

module.exports = { getIndexMessages, messages, getSpecificMessage };
