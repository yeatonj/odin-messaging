const { Router } = require("express");
const permissionsController = require("../controllers/permissionsController");
const permissionsRouter = Router();

permissionsRouter.get("/", permissionsController.permissionsGet);
permissionsRouter.post("/", permissionsController.permissionsPost);

module.exports = permissionsRouter;