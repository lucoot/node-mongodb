const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp')


    //db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
   // db.collection('Todos').deleteOne({text:'Something to do 4', completed:true}).then((result) => {
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bd7a4612c286c33cca659bc')
    }, {
        $set: {
            //completed: true
            name: 'Otis Pug'
        },
        $inc: {
            age: 1

        }
    },{
        returnOriginal: false
    }).then((results) =>{


    });


});