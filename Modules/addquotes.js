'use strict';
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
    quote: [quoteSchema]
});
//const userModel = mongoose.model('user', userSchema);
const usersModel = mongoose.model('user', usersSchema);
const user = new usersModel;//seeding

function seedUsersCollection(){
const user1= new usersModel ({
    email: `leana_baba@yahoo.com`,
    quote:[ ]
})

const user2= new usersModel ({
    email: `nanawmistkeh@gmail.com`,
    quote:[ ]
})
const user3= new usersModel ({
    email: `lolo.baba2014@gmail.com`,
    quote:[ ]
})
const user4= new usersModel ({
    email: `vittosc1997@gmail.com`,
    quote:[  ]
})
const user5= new usersModel ({
    email: `rujeenaalzoud@gmail.com`,
    quote:[  ]
})
const user6= new usersModel ({
    email: `x.firashasan@gmail.com`,
    quote:[  ]
})

user5.save();
user6.save();

}
 //seedUsersCollection();


function addQuotesHandler(req, res) {
    const {email,author,txt,tag} = req.body;
    console.log(req.body);
usersModel.findOne({email:email},(err,dataRes)=>{
if(err)
{res.send(err)}
else{
    dataRes.quote.push({
        author:author ,
        txt: txt,
        tag:tag
    })
}
dataRes.save();
res.send(dataRes.quote)

    console.log('hello from add');
})

}





module.exports = addQuotesHandler;