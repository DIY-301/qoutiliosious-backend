module.exports=quotesHandler;
const axios= require('axios');
function quotesHandler(req,res){
    let searchQuery=req.query.searchQuery;
    let url=`https://goquotes-api.herokuapp.com/api/v1/random/50?type=tag&val=${searchQuery}`;
    axios
    .get(url)
    .then(result=>{
    let data=result.data.quotes.map(item=>{
        return item;
    })
    res.send(data);
    }).catch(err=>{
        res.send(err);
    })
    
}