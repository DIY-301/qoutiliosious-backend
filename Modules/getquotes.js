var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://DIY:00000@qoutilicious-shard-00-00.wzcyv.mongodb.net:27017,qoutilicious-shard-00-01.wzcyv.mongodb.net:27017,qoutilicious-shard-00-02.wzcyv.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fnvudm-shard-0&authSource=admin&retryWrites=true&w=majority";
function getQuotesHandler(req, res) {
    MongoClient.connect(url,
        { useUnifiedTopology: true},
        (err, db) => {
            let email = req.query.email;
            let dbo=db.db('myFirstDatabase');
            dbo.collection('users').findOne({ email: email }, (err, dataRes) => {
                if (!err) {
                    res.send(dataRes.quote);

                }
                else {
                    res.send(err);
                }
            });
        }
    );

    }
module.exports = getQuotesHandler;