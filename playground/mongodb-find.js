const {MongoClient, ObjectID} = require('mongodb');


/*

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp')

    //db.collection('Todos').find({completed:false}).toArray().then((docs) => {
    db.collection('Todos').find({completed:false}).count().then((count) => {
        console.log('Todos count: ', count);
      //  console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch');
    


    });




    client.close();


});
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp')

    //db.collection('Todos').find({completed:false}).toArray().then((docs) => {
    db.collection('Users').find({name:'Otis Pug'}).count().then((count) => {
        console.log('User count: ', count);
      //  console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch');
    


    });




    client.close();


});