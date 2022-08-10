import initRoutes from './initRouting.js'
import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;
initRoutes(app)
app.listen(PORT, console.log("Server don start for port: " + PORT))