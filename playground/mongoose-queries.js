const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5bd7bc589fddc821a893b8e3';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
} else{
    User.findById(id).then((user) => {
        if (!user) {
            return console.log('Id not found');
        }
        console.log('User Found', user);
    }).catch((e) => console.log(e));

}
/*
Todo.find({
    _id: id}).then((todos) => {
        console.log('Todos', todos);
});


Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo);
}).catch((e) => console.log(e));
*/