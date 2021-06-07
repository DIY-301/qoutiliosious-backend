const mongoose = require('mongoose');
mongoose.connect('mongodb://DIY:00000@qoutilicious-shard-00-00.wzcyv.mongodb.net:27017,qoutilicious-shard-00-01.wzcyv.mongodb.net:27017,qoutilicious-shard-00-02.wzcyv.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fnvudm-shard-0&authSource=admin&retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });
    const quoteSchema = new mongoose.Schema({
        author: String,
        txt: String,
        tag: String
    });
    
    const usersSchema = new mongoose.Schema({
        email: String,
        quote: [
            quoteSchema
        ]
    });
    const usersModel = mongoose.model('user', usersSchema);
    function getQuotesHandler(req,res){
 let email=req.query.email;
  usersModel.findOne({email:email},(err,dataRes)=>{
  if(!err){
      res.send(dataRes.quote);
  }
  else{
      res.send(err);
  }
  });
}
module.exports=getQuotesHandler;