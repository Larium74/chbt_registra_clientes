import { connectiondb } from "../database/connection.js";

export const crearCliente = (req, res) => {
    console.log("Accediendo a la ruta /crearCliente");

    const { nombresCli, apellidosCli, edadCli, emailCliente, sexoCliente } = req.body;
    try {
        connectiondb.query(
            "INSERT INTO Clientes (Nombres_Cliente, Apellidos_Cliente, Edad_Cliente, Email_Cliente, Sexo_Cliente) VALUES (?, ?, ?, ?, ?)",
            [nombresCli, apellidosCli, edadCli, emailCliente, sexoCliente],
            (error, results) => {
                if (error) {
                    console.log("Hubo un error al crear el cliente: " + error);
                    res.status(500).json({
                        mensaje: "Error durante la creación del cliente",
                        estado: error.message
                    });
                } else {
                    console.log("Cliente creado correctamente");
                    res.status(200).json({
                        mensaje: "Cliente creado correctamente",
                        estado: "success"
                    });
                }
            }
        );
    } catch (error) {
        console.log("Hubo un error al crear el cliente: " + error);
        res.status(500).json({
            mensaje: "Error durante la creación del cliente",
            estado: error.message
        });
    }
};

export const verificarCliente = (req, res) => {
    console.log("Accediendo a la ruta /verificarCliente");

    const { nombresCli, apellidosCli } = req.body;
    try {
        connectiondb.query(
            "SELECT ID_Cliente FROM Clientes WHERE Nombres_Cliente = ? AND Apellidos_Cliente = ?",
            [nombresCli, apellidosCli],
            (error, results) => {
                if (error) {
                    console.log("Lo sentimos, no se pudo comprobar el cliente: " + error);
                    res.status(500).json({
                        mensaje: "Error al comprobar el registro del cliente",
                        estado: error.message
                    });
                } else {
                    if (results.length === 0) {
                        console.log("El cliente no se encuentra registrado en la base de datos");
                        res.status(200).json({
                            mensaje: "El cliente no se encuentra registrado en la base de datos",
                            estado: "success",
                            cliente_registrado: 0
                        });
                    } else {
                        console.log("El ID del cliente registrado es " + results[0].ID_Cliente);
                        res.status(200).json({
                            mensaje: "El cliente se encuentra registrado en la base de datos",
                            estado: "success",
                            cliente_registrado: 1
                        });
                    }
                }
            }
        );
    } catch (error) {
        console.log("Lo sentimos, no se pudo comprobar el cliente: " + error);
        res.status(500).json({
            mensaje: "Error al comprobar el registro del cliente",
            estado: error.message
        });
    }
};

