const mongoose = require('mongoose');
const MONGO = process.env.MONGO_URL;
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
//const userModel = mongoose.model('user', userSchema);
const usersModel = mongoose.model('user', usersSchema);
const user = new usersModel;//seeding

function seedUsersCollection(){
const user1= new usersModel ({
    email: `leana_baba@yahoo.com`,
    quote:[
        {
            author: 'Layana A. Baba',
            txt: 'jjjjjjjjj',
            tag:'Sad'
        }
    ]
})

const user2= new usersModel ({
    email: `nanawmistkeh@gmail.com`,
    quote:[
        {
            author: 'Fadi Nayef',
            txt: 'hjvjv',
            tag:'ggfhgf'
        }
    ]
})
user1.save();
user2.save();
}
// seedUsersCollection();


function addQuotesHandler(req, res) {
    //
    console.log('hello from add');
}

module.exports = addQuotesHandler;