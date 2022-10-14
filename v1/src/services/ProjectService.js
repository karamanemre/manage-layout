const ProjectModel = require("../models/ProjectModel")

const insert = (projectData) => {
    const projects = ProjectModel({
        name: projectData.name
    })
    return projects.save();
}

const list = () => {
    const getList = ProjectModel.findOne({});
    return getList;
}

module.exports = {
    insert,
    list
}