import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
 
const App = express()

App.use(cors({
     
}))

export { App }