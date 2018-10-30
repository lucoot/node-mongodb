const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp')


    //db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
   // db.collection('Todos').deleteOne({text:'Something to do 4', completed:true}).then((result) => {
   // db.collection('Todos').findOneAndDelete({text:'Something to do 4', completed:true}).then((result) => { //finds, deletes, but stores value
        console.log(result);
      //  console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to delete');
    


    });




    client.close();


});