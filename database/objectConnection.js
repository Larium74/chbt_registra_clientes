import { variables } from "../config.js";

export let objectConnection = {
    host: variables.DB_HOST,
    database: variables.DB_NAME,
    user: variables.DB_USER,
    password: variables.DB_PASSWORD,
    port: variables.DB_PORT
}