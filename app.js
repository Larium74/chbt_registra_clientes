import express from "express"
import cors from "cors"
import { variables } from "./config.js"
import { comprobarConeciondb } from "./database/connection.js"



let app = express ()
comprobarConeciondb ()

app.use (cors ())
app.use (express.json ())
app.use (express.urlencoded ({extended: false}))


app.listen (variables.PORT, ()=>  console.log ("Servidor inicializado en el puerto "+variables.PORT))