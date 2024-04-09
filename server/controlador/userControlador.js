const fs = require('fs').promises;
const { register } = require('module');
const path = require('path');

const iserFilePath = path.join(__dirname, "../../src/componentes/usuariosRegistrados.json");

const controlador = {

    register: async function (req, res){
        try {
            const usersData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(usersData);

            const ultimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,
                identificacion: req.body.identificacion,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fechaNacimiento,
                password: req.body.password,
                estado: "activo",
                rol: req.body.rol,
                fechaCreacion: new Date(),
            };
        } catch (error) {
            
        }
    }
}