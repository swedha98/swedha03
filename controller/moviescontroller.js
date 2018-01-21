var movies =require('./moviesdata');
var dbservices=('../services/dbservices');
exports.getAllmovies=function(req,res){
  var db=dbservice.database;
  var moviescollection=db.collection("movies");
  moviesCollection.find().toArray().then(function(result){
    var outputJSON={
      "jsSuccess":true,
      "data":result
  }
  return res.json(outputJSON);
});
};
exports.addNewMovie=function(req,res,next){
  var db=dbservice.database,
  movie=req.body,
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then(function(save_data){
return res.json({
  "isSuccess":true
});
});
}
