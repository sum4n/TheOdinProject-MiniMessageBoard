const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getIndexMessages);

indexRouter.post("/open", indexController.getSpecificMessage);

module.exports = indexRouter;
