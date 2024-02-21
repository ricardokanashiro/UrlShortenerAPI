import { fastify } from "fastify"
import { DatabaseMemory } from "./database-memory.js"

const server = fastify()

const db = new DatabaseMemory()

server.post('/', (req, rep) => {
    db.verifyLinkExpiration()

    const { url } = req.body

    const shortId = db.insert(url)

    console.log(db.list())

    return rep.status(200).send({
        shortUrl: `http://localhost:3333/${shortId}`
    });
})

server.get('/:url', (req, rep) => {
    db.verifyLinkExpiration()

    const url = req.params.url

    const fullUrl = db.get(url)[0].full

    console.log(db.list())

    return rep.redirect(fullUrl)
})

server.listen({
    port: 3333
}, () => console.log('Server ON'))