const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "bdEcommerceLocal",
    port: 3306,
})

connection.connect((error) => {
    if(!error)
        {console.log("Conexión exitosa a la base de datos.")}
    else{console.log("Conexión fallida a la base de datos.")}
})

module.exports = connection