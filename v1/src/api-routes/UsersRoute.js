const express = require("express");
const validate = require("../middlewares/validate");
const controller = require("../controllers/UsersController");
const schemas = require("../validations/UsersValidation");
const router = express.Router();

router
.route("/").post(validate(schemas.createValidation),controller.create)
router.get("/", controller.getList);
router.route("/login").post(validate(schemas.loginValidation),controller.login)

module.exports = router;
 