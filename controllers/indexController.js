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
    title: "Messages",
    messages,
  });
};

module.exports = { getIndexMessages };
