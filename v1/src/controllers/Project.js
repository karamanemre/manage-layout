const {insert} = require("../services/ProjectService")
const httpStatus = require("http-status")

const create = (req,res) => {
    insert({name:"1"})
    .then((response) => {
        res.status(httpStatus.CREATED).send(response)
    }).catch((e)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("HATA")
    })
}

const index = (req,res) => {
   res.status(httpStatus.OK).send("Project Index")
}

module.exports = {
    index,
    create
}