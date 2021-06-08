'use strict';
const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
require('dotenv').config();
const getQuotesHandler = require('./Modules/getquotes');
const quotesHandler = require('./Modules/quotes');
const {addQuotesHandler,updateQuotes,deleteQuotes}=require('./Modules/addquotes');


const server = express();

server.use(express.json());
server.use(cors());

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})





server.post('/addquote',addQuotesHandler);
server.get('/quote', quotesHandler);
server.get('/getquote', getQuotesHandler);
server.put('/updatequote/:index', updateQuotes);
server.delete('/deleteqout/:index', deleteQuotes);




//NOW TEST THE URL
// http://localhost:3003/
server.get('/', (request, response) => {
    let str = 'hello from back end';
    response.status(202).send(str);
})


// if we search about something wrong 
server.get('*', (req, res) => {
    res.status(404).send('not found');
})



// step 1 do listening 


