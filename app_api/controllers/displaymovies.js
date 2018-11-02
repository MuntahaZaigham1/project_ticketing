var mongoose = require('mongoose');
require('../models/showtimedb');

var movie2 = mongoose.model('show1');
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };
  
  module.exports.locationsListByDistance = function(req, res) {
    var lng = parseFloat(req.params.movieid);

    movie2.find( function(err,results) {
        var movies;
        console.log('Geo Results', results);
        //console.log('Geo stats', stats);
        if (err) {
          console.log('movie error:', err);
          sendJSONresponse(res, 404, err);
        } else {
          movies = buildLocationList(req, res,results);
          sendJSONresponse(res, 200, movies);
        }
      });
    };
    var buildLocationList = function(req, res, results) {
        var movies = [];
        results.forEach(function(doc) {
          movies.push({
            //distance: theEarth.getDistanceFromRads(doc.dis),
            id:doc.obj.id,
            name:doc.obj.name,
            location: doc.obj.location,
            capacity: doc.obj.capacity,
            reseved: doc.obj.reserved,
            goldPrice: doc.obj.goldPrice,
            silverPrice: doc.obj.silverPrice,
            rating: doc.obj.rating,
            description:doc.obj.description,

        
            _movieid: doc.obj._movieid,
            title: doc.obj.title,
            genre: doc.obj.genre,
            language: doc.obj.language,
            rating1: doc.obj.rating1,
            description1: doc.obj.description1,
            
            //time1=doc.obj.time1,
            //date1=doc.obj.date1,
            //reservedS=doc.obj.reservedS
          });
        });
        return movies;
      };
/*var displaymovies1=function(req ,res,movDetail){
    res.render(
        'index.html',
        {
            movie1:movDetail
        }

    );

};*/
/*module.exports.displaymovies=function(req,res){
  //displaymovies1(req,res);
  var requestOptions,path;
  path="/api/locations/"+req.params.movieid;
  requestOptions={
      url:apiOptions.server + path,
      method: "GET",
      json:{}
  };
  request(
      requestOptions,
      function(err,response,body){
          var data=body;
          data.title={
              
          };
        displaymovies1(req,res,data);
      }
  );
};
*/

