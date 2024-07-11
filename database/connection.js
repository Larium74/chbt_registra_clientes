import {createPool} from "mysql2/promise"
import { objectConnection } from "./objectConnection.js";

export let connectiondb = createPool (objectConnection)

export let comprobarConeciondb = async () => {
    console.log ("Comprobando la conexión con la bsae de datos")

    try {
        let estado = await connectiondb.getConnection ()
        console.log ("La conexión con la base de datos ha sido exitosa")
    }
    catch (error) {
        console.log ("Hubo un error al conectarse con la base de datos "+error)
    }

}