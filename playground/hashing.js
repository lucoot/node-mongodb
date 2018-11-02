const{SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// JAVASCRIPT WEB TOKEN
var data0 = {
    id: 4
};

var token0 = jwt.sign(data0, 'pugsalt');
var decoded = jwt.verify(token0, 'pugsalt');


console.log(token0);
console.log(decoded);

//SALT AND HASH
var message = 'Hello I am otis the pug';

var hash = SHA256(message).toString();
console.log('message', message);
console.log('hash', hash);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'otisthepug-salt').toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'otisthepug-salt').toString();

if (resultHash === token.hash) {
    console.log("Checks out")
}