const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");

const app = express();

app.set("view engine", "ejs");

// Middleware to parse form data into req.body.
app.use(express.urlencoded({ extended: true }));

// Serve static assets.
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new", formRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listenting on port: ${PORT}`);
});
