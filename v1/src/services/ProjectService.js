const ProjectModel = require("../models/ProjectModel")

const insert = (projectData) => {
    const projects = ProjectModel({
        name: projectData.name
    })
    return projects.save();
}

module.exports = {
    insert,
}