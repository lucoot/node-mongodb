//const MongoClient = require('mongodb').MongoClient;
//object destructuring  version
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp')

    db.collection('Users').insertOne({
        //text: 'Something to do 4',
       // completed: false
       name: 'Lucas Cooter',
       age: 32,
       location: 'San Francisco'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        //console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());





    });




    client.close();


});