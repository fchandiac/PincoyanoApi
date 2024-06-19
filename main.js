require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const port = process.env.PORT //|| 3003
const https = require('https');
const fs = require('fs');

const app = express()


app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: '*' }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/sellers'))
app.use(require('./routes/categories'))
app.use(require('./routes/subcategories'))
app.use(require('./routes/products'))
app.use(require('./routes/customers'))
app.use(require('./routes/users'))
app.use(require('./routes/sales'))
app.use(require('./routes/files'))
app.use(require('./routes/records'))

// Ruta a los archivos del certificado y clave privada
const keyPath = path.join(__dirname, 'key.pem');
const certPath = path.join(__dirname, 'cert.pem');

const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };



app.get('/', (req, res) => {
    res.send('Welcome to the API')
})


app.listen(port, () => {
    console.log('server work! at port: ' + port)
})

// Crear servidor HTTPS
// https.createServer(options, app).listen(port, () => {
//     console.log('Servidor HTTPS escuchando en el puerto ' + port);
//   });