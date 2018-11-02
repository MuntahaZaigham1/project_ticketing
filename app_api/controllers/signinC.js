var mongoose = require('mongoose');
//var user = mongoose.model('../models/usersdb');
//var users=require('../models/usersdb');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };
module.exports.locationsListByDistance = function(req, res) {
    sendJsonResponse(res, 200, { status: "success1" });
  };