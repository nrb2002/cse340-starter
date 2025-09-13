const express = require('express'); //Import Express
const router = express.Router(); //Use the router functionality of Express

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("public")); //Use express static resources
router.use("/css", express.static(__dirname + "public/css")); //Any route that contains "/css" will refer to the public/css folder
router.use("/js", express.static(__dirname + "public/js")); //Any route that contains "/css" will refer to the public/js folder
router.use("/images", express.static(__dirname + "public/images")); //Any route that contains "/css" will refer to the public/images folder

module.exports = router; //Export the route object for use in other areas of the application



