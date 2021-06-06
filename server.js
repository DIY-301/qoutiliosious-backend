'use strict';
const addQuotesHandler=require('./Modules/addquotes');
const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
require('dotenv').config();
const quotesHandler=require('./Modules/quotes');
const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;
server.get('/quote',quotesHandler);
server.get('/addquote',addQuotesHandler);

//NOW TEST THE URL
// http://localhost:3001/
server.get('/', (request, response) => {
    let str = 'hello from back end';
    response.status(202).send(str);
})



//add new data books to MongoDB and render it in front end 
function addBook(request,response){
    console.log(request,'gr');
    const { tag,text} = request.body;
  
    user.find({ email: email }, (error, ownerData) => {
      if(error) {response.send('not Working')}
      else{
        console.log('before pushing',ownerData[0])
  
      ownerData[0].qoute.push({
       
          tag:tag,
          text:text,
      })
      ownerData[0].save();
      response.send(ownerData[0]);
    }
  });
  
  }

server.get('/addQoute',(request, response)=>{

})
// if we search about something wrong 
server.get('*', (req, res) => {
    res.status(404).send('not found');
})

// step 1 do listening 
server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})

