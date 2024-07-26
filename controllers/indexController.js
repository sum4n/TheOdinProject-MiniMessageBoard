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

module.exports = { getIndexMessages };
