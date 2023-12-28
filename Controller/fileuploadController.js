const File = require("../Models/file");

//localfileupload handeler

exports.localFileUpload = async (req,res) =>{
    try
    {   
        //fetching file
        const file = req.files.file;
        console.log("Getting file :",file);

        let path = __dirname + "/Files" + Date.now() + `.${file.name.split('.')[1]}`;
                    //curent directory  //current date in binary //fetcing extention and meri=ging


        //moving file to File directory to save that file to server
        file.mv(path , (err) =>{
            console.log(err);
        })

        res.json({
            sucess:true,
            message:"Local file Upload Sucess"
        })
    }   
    catch(error)
    {
        console.log(error);
    }
}