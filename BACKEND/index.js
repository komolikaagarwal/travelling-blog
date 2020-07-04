const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

var client = new MongoClient('mongodb://localhost:27017/tourguide', {useNewUrlParser:true})
//var client = new MongoClient('mongodb://localhost:27017/mongodb+srv://bhumikasalvi56:123@cluster0-2krqz.mongodb.net/dbtravelling-blog?retryWrites=true&w=majority', {useNewUrlParser:true})
// //mongodb+srv://bhumikasalvi56:<password>@cluster0-2krqz.mongodb.net/<dbname>?retryWrites=true&w=majority
 var connection;
 client.connect((err, con)=>{
        if(!err)
        {
            connection=con;
            console.log("database connected successfully");
        }
        else{
            console.log("database could not connect");
        }
})



  const app = express();


   app.use(cors());

app.post('/signup', bodyParser.json() ,(req,res)=>{  

        const collection = connection.db('tourguide').collection('users');


        collection.insert(req.body, (err,result)=>{
            if(!err)
            {
                res.send({status:"ok", data:"signup successfull for "+req.body.name});
            }
            else{
                res.send({status:"failed", data:"could not register"});
            }
        })



   });
 app.post('/signin', bodyParser.json() ,(req,res)=>{ 



    const collection = connection.db('tourguide').collection('users');


    collection.find(req.body).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok", data:docs});
        }
        else{
            res.send({status:"failed", data:"some error occured"});
        }
    })

    });



app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
    // console.log("got to browser and hit 'localhost:3000'");
})