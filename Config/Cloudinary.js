const cloudinary = require("cloudinary").v2;

require("dotenv").config();

exports.CloudinaryConeect = () =>
{
    try
    {
        cloudinary.config = ({
            CLOUD_NAME:process.env.CLOUD_NAME,
            API_KEY: process.env.API_KEY,
            API_SECRET: process.env.API_SECRET,
    })
    }
    catch(error)
    {
        console.log(error);
    }
}
