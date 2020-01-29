const express = require('express')
const app = express()
const port = 3436
const bodyParser= require('body-parser')
const https = require('https');
const post=[]

app.use(bodyParser.json()); // parse requests of content-type - application/json

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});

// app.get('http://localhost:3000/post',(response)=>{
//   console.log(typeof(response)); 
// })

// app.get('/post',function(req,res){
//     res.send(arrayUser)
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


