
// 'use strict';
// const mongoose = require('mongoose');


// const MONGO = process.env.MONGO_URL;
// mongoose.connect('mongodb://DIY:00000@qoutilicious-shard-00-00.wzcyv.mongodb.net:27017,qoutilicious-shard-00-01.wzcyv.mongodb.net:27017,qoutilicious-shard-00-02.wzcyv.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fnvudm-shard-0&authSource=admin&retryWrites=true&w=majority',
//     { useNewUrlParser: true, useUnifiedTopology: true });

// function deleteQuotes(request, response) {
 
//     const index = Number(request.params.index);
   
    
//     const { email} = request.query;
    
//     usersModel.find({email: email}, (err, qouteData) => {
        
//   try {
//     const newArr = qouteData.quote.filter((quote, idx) => {
//       return idx !== index
//   });
//   qouteData[0].quote = newArr;
//   qouteData[0].save();
//   response.send(qouteData[0].quote);
//   } catch (error) {
//     console.log(error);
//   }
//   if (err) {response.send(`YOU GOT AN ERROR! your error: ${err}`)};  
  
       
//     });
//   }

//   module.exports=deleteQuotes;