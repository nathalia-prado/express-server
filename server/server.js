import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'


const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

export default server
