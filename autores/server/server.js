require('dotenv').config()
const DB_PORT = process.env.DB_PORT
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const connectDB = require('./config/mongoose.config')

connectDB().then (() => {
    const AuthorRouter = require('./routes/author.routes')
    app.use('/api/author', AuthorRouter)

    app.listen(DB_PORT, () => {
        console.log(`Servidor corriendo en ${DB_PORT}`)
    })

}).catch(error => console.log('Error al establecer la conexion',error))
