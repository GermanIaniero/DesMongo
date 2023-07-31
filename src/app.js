import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import productRouter from './routes/product.router.js'
import viewRouter from './routes/view.router.js'
import __dirname from './utils.js'
import {Server} from "socket.io"
import modelMessage from './DAO/mongoManager/models/modelMessage.js'

//const { Server } = require("socket.io");

const app = express()

// Carpeta publica
app.use('/public', express.static(__dirname + '/public'))

// Para traer info de post como JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Configurar los motores de plantilla
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', viewRouter)

app.use('/products', productRouter)
app.get('/', (req, res) => res.send('It works great!!'))

mongoose.set('strictQuery', false)
const URL = "mongodb+srv://gerlian:1234@clusterger.mgws5uk.mongodb.net/"

const httpServer = app.listen(8080, (req, res) => {
  console.log('Listenning..');
});

mongoose.connect(URL, {
    dbName: 'eccommerce'
})
    .then(() => {
        console.log('DB connected!!')
    })
    .catch(e => {
        console.log("Can't connect to DB")
    })


    const io = new Server(httpServer);

    io.on("connection", (socket) => {
      console.log("nueva conexion");
      socket.on("client:message", (data) => { console.log('Información que viene del front:', data) })
    })  