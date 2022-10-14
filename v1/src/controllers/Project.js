const {insert,list} = require("../services/ProjectService")
const httpStatus = require("http-status")

const create = (req,res) => {
    insert(req.body)
    .then((response) => {
        res.status(httpStatus.CREATED).send(response)
    }).catch((e)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("HATA")
    })
}

const getList = (req,res) => {
    list().then((res)=>{
        res.status(httpStatus.OK).send(res)
    }).catch((err)=>{
        res.status(httpStatus.NOT_FOUND).send(res)
    })
}

module.exports = {
    getList,
    create
}