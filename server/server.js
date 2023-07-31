import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'


const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

server.get('/compliment', (req, res) => {
    res.send('<h1>You look great today</h1>')
})

server.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/silvia.html')
  })

export default server
