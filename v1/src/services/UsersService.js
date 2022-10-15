const UsersModel = require("../models/UsersModel")

const insert = (data) => {
    const user = new UsersModel(data)
    return user.save();
}

const list = () => {
    return UsersModel.find();
}

const loginUser = (loginData) => {
    return UsersModel.findOne(loginData)
}

const checkEmailInUse = (email) => {
    const user = UsersModel.findOne(email);
    return user ? true : false;
}

module.exports = {
    insert,
    list,
    loginUser,
    checkEmailInUse
}