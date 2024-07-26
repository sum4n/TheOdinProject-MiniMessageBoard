const express = require("express");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`App listenting on port: ${PORT}`);
});
