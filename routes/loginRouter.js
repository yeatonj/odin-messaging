const { Router } = require("express");
const loginController = require("../controllers/loginController");
const loginRouter = Router();

const passport = require('passport');


loginRouter.get("/", loginController.loginGet);
loginRouter.post("/", loginController.loginPost);

module.exports = loginRouter;