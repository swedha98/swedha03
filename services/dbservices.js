var MongoClient=require('mongodb').MongoClient;
exports.createconnection=function(){
  mongoClient.connect("mongodb://swedha:arvinthaasriee@ds111258.mlab.com:11258/projector98").then(function(client){
    console.log("connected to mongodb");
  exports.database = client.db("projector98");
});
}
