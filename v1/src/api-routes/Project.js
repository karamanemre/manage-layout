const express = require("express");
const controller = require("../controllers/ProjectController");
const authenticateToken = require("../middlewares/authenticate");
const validate = require("../middlewares/validate");
const schemas = require("../validations/ProjectValidation");
const router = express.Router();

router.route("/").post(authenticateToken,validate(schemas.createValidation), controller.create);
router.route("/").get(authenticateToken, controller.getList);
router.route("/:id").patch(authenticateToken,validate(schemas.updateValidation), controller.update)

module.exports = router;
