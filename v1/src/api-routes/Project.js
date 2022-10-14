const express = require("express");
const controller = require("../controllers/Project");
const router = express.Router();

router.post("/",controller.create)
router.get("/", controller.getList);

module.exports = {
  router,
};
