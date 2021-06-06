const mongoose = require('mongoose');
const MONGO = process.env.MONGO;
mongoose.connect(MONGO,
    { useNewUrlParser: true, useUnifiedTopology: true });

const quoteSchema = new mongoose.Schema({
    author: String,
    txt: String,
    tag: String
});

const usersSchema = new mongoose.Schema({
    email: String,
    quote: {
        author: String,
        txt: String,
        tag: String
    }
});
//const userModel = mongoose.model('user', userSchema);
const usersModel = mongoose.model('user', usersSchema);
const user1 = new userModel;//seeding



function addQuotesHandler(req, res) {
    //
    console.log('hello from add');
}

module.exports = addQuotesHandler;