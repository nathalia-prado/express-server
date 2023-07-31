import * as Path from 'node:path/posix'
import * as URL from 'node:url'
import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
const server = express()

server.use(express.static(Path.resolve('public')))
server.use(express.urlencoded())

server.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

server.get('/compliment', (req, res) => {
    res.send('<h1>You look great today</h1>')
})

server.get('/profile', (req, res) => {
    const name = req.query.name 
    if(name === 'silvia'){
        res.sendFile(__dirname + '/silvia.html')
    } else if(name === 'sampson') {
        res.sendFile(__dirname + '/sampson.html')
    }
})

server.get('/profiles/:id', (req, res) => {
    const id = req.params.id 
    if(id === '1'){
        res.sendFile(__dirname + '/silvia.html')
    } else if(id === '2') {
        res.sendFile(__dirname + '/sampson.html')
    }
})

server.get('/get-name', (req, res) => {
    res.sendFile(Path.resolve('public/get-name.html'))
})

server.post('/named-compliment', (req, res) => {
    res.send(`<h1>You are special, ${req.body.name}.</h1>`)
})

export default server
