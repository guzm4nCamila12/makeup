const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10715869",
    password: "fxZ1tc63W9",
    database: "sql10715869",
    port: 3306,
})

connection.connect((error) => {
    if(!error)
        {console.log("Conexión exitosa a la base de datos.")}
    else{console.log("Conexión fallida a la base de datos.")}
})

module.exports = connection