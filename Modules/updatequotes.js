var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://DIY:00000@qoutilicious-shard-00-00.wzcyv.mongodb.net:27017,qoutilicious-shard-00-01.wzcyv.mongodb.net:27017,qoutilicious-shard-00-02.wzcyv.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fnvudm-shard-0&authSource=admin&retryWrites=true&w=majority";
function updateQuotes (req,res)
{
    MongoClient.connect(url,
        { useUnifiedTopology: true},
        (err, db) => {
            let dbo=db.db('myFirstDatabase');
        const index = Number(req.params.index);
        const { email,author,txt,tag } = req.body;console.log(req.body,index);
        dbo.collection('users').findOne({email : email},(error,responseQuote)=>{
            console.log(req.body);
            responseQuote.quote.splice(index,1,{
                author: author,
                txt:txt,
                tag:tag
               
            })
            console.log(dbo.collection('users'));
            responseQuote.quote.save(); 
            res.send('done!')
        })
    })
    
}
module.exports=updateQuotes;