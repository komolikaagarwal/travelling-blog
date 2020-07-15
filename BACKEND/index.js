const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;


// var client = new MongoClient('mongodb://localhost:27017/tourguide',{useNewUrlParser:true})

var client = new MongoClient('mongodb+srv://komolika15:komolika@tourdb.sn9an.mongodb.net/tourdb?retryWrites=true&w=majority', { useNewUrlParser: true })


// mongodb+srv://komolika15:<password>@tourdb.sn9an.mongodb.net/<dbname>?retryWrites=true&w=majority

var connection;
client.connect((err,con)=>{
    if(!err)
    {
        connection = con;
        console.log("database connected successfully");
    }
    else{

        console.log("database could not connect successfully");
    }

})

const app = express(); 

app.use(cors());


app.post('/sign up',bodyParser.json,(req,res)=>{
    const collection = connection.db('tourdb').collection('users');

    collection.insert(req.body,(err,result)=>{
        if(!err)
        {
            res.send({status:'ok', data : "sign up successfully for " + req.body.name});
        }
        else
        {
            res.send({status:'failed', data : "sign up unsuccess"});
        }
    })

})


app.post('/sign in', bodyParser.json, (req, res) => {
    const collection = connection.db('tourdb').collection('users');

    collection.find(req.body).toArray((err, docs) => {
        if (!err && docs.length>0) 
        {
            res.send({status:'ok', data : docs});
        }
        else 
        {
            res.send({status :'failed', data : "some error occured"});
        }
    })

});

app.post('/add-location', bodyParser.json(), (req, res) => {
    console.log(req.body);
    var collection = connection.db(dbName).collection('users');
    collection.update({ email: req.body.userEmail }, { $set: { location: req.body.location } }, { upsert: true }, (err, result) => {
        if (!err) {
            console.log(result);
            res.send({ status: "ok", data: "location added" });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    });

})



app.listen(3000,()=>{
    console.log("server is listing on port 3000");
    // console.log("go to browser and hit 3000");
})