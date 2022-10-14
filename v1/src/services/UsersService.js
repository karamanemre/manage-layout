const UsersModel = require("../models/UsersModel")

const insert = (data) => {
    const user = new UsersModel(data)
    return user.save();
}

const list = () => {
    return UsersModel.find();
}

module.exports = {
    insert,
    list
}