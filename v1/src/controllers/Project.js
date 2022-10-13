const http = require("../constants/httpStatusCode");

const create = (req,res) => {
    res.status(200).send("Project Index")
}

module.exports = {
    create,
}