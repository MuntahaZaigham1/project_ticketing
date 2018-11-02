var express = require("express");
var router = express.Router();
var ctrlSignup = require("../controllers/signupC");
var ctrlSignin =require("../controllers/signinC")
var ctrlM=require("../controllers/displaymovies");

router.post("/landing.html/:id", ctrlSignup.locationsListByDistance );
router.post("/landing.html/:id", ctrlSignin.locationsListByDistance );
router.get("/index.html/:_movieid",ctrlM.locationsListByDistance );

module.exports = router;