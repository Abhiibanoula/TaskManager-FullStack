import { app } from './app.js'
import dotenv from 'dotenv';
dotenv.config()
// const { app } = require("./app.js");
const figlet  = require("figlet");
const { ConnectDB } = require("./config/db.config");
const port = process.env.PORT || 8080
ConnectDB()



app.listen(port,()=>{
    figlet(`localhost:${port}`,(err,data)=>{
        console.log(data);
    })
})