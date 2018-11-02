var mongoose = require('mongoose');
//var user = mongoose.model('usersdb');


var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };
module.exports.locationsListByDistance = function(req, res) {
    sendJsonResponse(res, 200, { status: "success" });
  };