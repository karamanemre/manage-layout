const {insert,list} = require("../services/ProjectService")
const httpStatus = require("http-status")

const create = (req,res) => { 
    req.body.user_id = req.user;
    insert(req.body)
    .then((response) => {
        res.status(httpStatus.CREATED).send(response)
    }).catch((e)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("HATA")
    })
}

const getList = (req,res) => {
    list().then((response)=>{
        res.status(httpStatus.OK).send(response)
    }).catch((err)=>{
        res.status(httpStatus.NOT_FOUND).send(res)
    })
}

module.exports = {
    getList,
    create
}