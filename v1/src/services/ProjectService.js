const ProjectModel = require("../models/ProjectModel")

const insert = (projectData) => {
    const projects = ProjectModel({
        name: projectData.name,
        user_id: projectData.user_id
    })
    return projects.save();
}

const list = () => {
    return ProjectModel.find().populate({
        path:"user_id",
        select: "full_name email"
    });
}

const modify = (data,id) => {
    return ProjectModel.findByIdAndUpdate(id,data,{new:true});
}

module.exports = {
    insert,
    list,
    modify,
}