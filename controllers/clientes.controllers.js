import { NOMEM } from "dns";
import { connectiondb } from "../database/connection.js";

export let crearCLliente = (req, res) => {
    console.log ("Accediendo a la ruta /crearClientes")

    const {nombresCli, apellidosCli, edadCli, emailCliente, sexoCliente} = req.body
    try {
        let data = connectiondb.query ("INSERT INTO Clientes (Nombres_Cliente, Apellidos_Cliente, Edad_Cliente, Email_Cliente, Sexo_Cliente) VALUES (?, ?, ?, ?, ?)", [nombresCli, apellidosCli, edadCli, emailCliente, sexoCliente])
    }

}
