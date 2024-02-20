import { fastify } from "fastify"
import { DatabaseMemory } from "./database-memory.js"

const server = fastify()

const db = new DatabaseMemory()

server.post('/short/:url', (req, rep) => {
    const { url } = req.body

    const shortId = db.insert(url)

    return rep.status(200).send({
        shortUrl: `http://localhost:3333/short/${shortId}`
    });
})

server.get('/short/:url', (req, rep) => {
    const url = req.params.url

    const fullUrl = db.get(url)[0].full

    return rep.redirect(fullUrl)
})

server.listen({
    port: 3333
}, () => console.log('Server ON'))