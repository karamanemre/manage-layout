const {insert,list,modify} = require("../services/ProjectService")
const httpStatus = require("http-status")

const getList = (req,res) => {
    list().then((response)=>{
        res.status(httpStatus.OK).send(response)
    }).catch((err)=>{
        res.status(httpStatus.NOT_FOUND).send(res)
    })
}

const create = (req,res) => { 
    req.body.user_id = req.user;
    insert(req.body)
    .then((response) => {
        res.status(httpStatus.CREATED).send(response)
    }).catch((e)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("HATA")
    })
}

const update = (req,res) => {
    if (!req.params?.id) {
       return res.status(httpStatus.BAD_REQUEST).send({
            message:"ID bilgisi eksik"
        })
    }
    modify(req.body,req.params?.id).then((response)=>{
        res.status(httpStatus.CREATED).send(response)
    }).catch((e)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Update işlemi başarısız")
    })
}



module.exports = {
    getList,
    create,
    update
}