const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema ({
    name:
        {
            required:true,
            type:String
        },
    imageUrl:
        {
            type:String
        },
    tags:
        {
            type:String
        },
    email:
        {
            type:String
        }   
});

const File = mongoose.model("File",fileSchema);
module.exports = File;