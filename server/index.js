const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json())

// Conexion DB MySQL
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"prueba_crud",
    insecureAuth: true
});

// Creacion de Usuarios
app.post("/createUser", (req, res) => {
    const nameUser = req.body.nameUser;
    const email = req.body.email;
    const password = req.body.password;

    db.query('INSERT INTO user(name_user, email_user, password_user) VALUES(?,?,?)',[nameUser, email, password],(err, result) => {
        if(err){
            console.log("El error es: "+err)
        } else {
            res.send("Empleado Registrado con Exito")
        }
    })
});

app.listen(3001, () =>{
    console.log("Conectando con el puerto 3001");
})

app.get('/', (req, res) => {
    let agenteUsuario = req.header("user-agent");
    res.send("La ruta / solicita con: "+agenteUsuario);
});