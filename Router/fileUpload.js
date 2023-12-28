const express = require("express");
const router = express.Router();

//handler function
const {localFileUpload} = require("../Controller/fileuploadController"); 

//api route
router.post("/loacFileUpload",localFileUpload);

module.exports=router;