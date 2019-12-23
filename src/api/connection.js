const mysql = require('mysql');
//const express = require('express');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ContactsApp'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected...');
});

// const app = express();

// app.listen('3000', () => {
//     console.log('Listening on localhost:3000...');
// })