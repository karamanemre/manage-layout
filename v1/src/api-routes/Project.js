const express = require("express");
const controller = require("../controllers/Project");
const validate = require("../middlewares/validate");
const schemas = require("../validations/ProjectValidation");
const router = express.Router();

router
.route("/")
.post(validate(schemas.createValidation),controller.create)
router.get("/", controller.getList);

module.exports = router;
