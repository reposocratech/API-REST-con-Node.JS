var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'alumnos'
});

connection.connect(function(err) {
    if(err) throw err;

    console.log('conexión a la base de datos correcta');
});

module.exports = connection;