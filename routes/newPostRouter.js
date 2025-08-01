const { Router } = require("express");
const newPostController = require("../controllers/newPostController");
const newPostRouter = Router();

newPostRouter.get("/", newPostController.newPostGet);
newPostRouter.post("/", newPostController.newPostPost);

module.exports = newPostRouter;