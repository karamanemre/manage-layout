const express = require("express");
const http = require("../constants/httpStatusCode");
const {create} = require("../controllers/Project");

const router = express.Router();

router.get("/",(req,res) => create)

module.exports = {
    router,
}