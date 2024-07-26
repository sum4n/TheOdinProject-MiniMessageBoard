const formGet = (req, res) => {
  res.render("pages/form", {
    title: "Create new message",
  });
};

module.exports = { formGet };
