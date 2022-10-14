const ProjectModel = require("../models/ProjectModel")

const insert = (projectData) => {
    const projects = ProjectModel({
        name: projectData.name
    })
    return projects.save();
}

const list = () => {
    return ProjectModel.find();
}

module.exports = {
    insert,
    list
}