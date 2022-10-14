const Mongoose = require('mongoose');
const ProjectSchema= new Mongoose.Schema({
    name:String,
    // user_id: {
    //     type: Mongoose.Types.ObjectId,
    //     ref: "user" 
    // },

}, {versionKey:false,timestamps:true});

module.exports = Mongoose.model("project",ProjectSchema);