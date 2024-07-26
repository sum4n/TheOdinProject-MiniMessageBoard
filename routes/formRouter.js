const { Router } = require("express");
const formController = require("../controllers/formController");

const formRouter = Router();

formRouter.get("/", formController.formGet);

formRouter.post("/", formController.fromPost);

module.exports = formRouter;
