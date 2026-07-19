import dotenv from "dotenv"
import connectDB from "../src/db/index.js"
import { App } from "./app.js"

dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    App.listen(process.env.PORT || 8000, ()=>{
        console.log(
            `Server is running on PORT : ${process.env.PORT}`
        );
        
    })
})
.catch((err)=>{
    console.log(
        `Mongo DB connection failed !!! : ${err}`
    );
    
})