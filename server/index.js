const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    //res.send("saludando desde el backend")
    let config = {
        method: "GET",
        //maxBodyLength: Infinity,
        url: "https://api.jsonbin.io/v3/b/66562a3ce41b4d34e4faf159",
        headers: {
            'Content-Type': 'application/json',
            "X-Master-Key": "$2a$10$Ehv3j05vWa4FFLt1IKyqgOfHVRMIDEvmiMTEiz9VMrpBqOZdLGG3q"
        }
    };
    axios(config)
    .then(result => {
        res.send(result.data.record)
    })
});

//const user = require("./controlador/userControlador");
const user = require("./controlador/userControlador");
app.use("/registro-usuario", user.registerBD);
//app.use("/login", user.login);

const PORT = 3001
    app.listen(PORT,()=>{
        console.log("servidor corriendo en el puerto",PORT) 
})

const conexion = require('./configDB/configDB')
app.get("/todos-los-usuarios", (req, res) => {
    conexion.connect(function (err) {
        if(err) throw err;
        conexion.query("SELECT * FROM sql10715869.usuarios", function (err, result, fields){
            if(err) throw err;
            res.send(result)
        })
    })
})