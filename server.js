'use strict';
const addQuotesHandler=require('./Modules/addquotes');
const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
require('dotenv').config();
const quotesHandler=require('./Modules/quotes');
const getQuotesHandler=require('./Modules/getquotes');
const deleteQuotes=require('./Modules/addquotes');
const server = express();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT;
server.get('/quote',quotesHandler);
server.get('/getquote',getQuotesHandler); 
server.post('/addquote',addQuotesHandler);
server.delete('/deleteqout/:index', deleteQuotes);
server.put('/editquote/:index',updateQuotes);




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
server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})


