import { fastify } from "fastify"
import { DatabasePostgres } from "./database-postgres.js"

const server = fastify()

const db = new DatabasePostgres

server.post('/', async (req, rep) => {
    await db.verifyLinkExpiration()
    
    console.log(await db.list())

    const { url } = req.body

    const shortId = await db.create(url)

    return rep.status(200).send({
        shortUrl: `http://localhost:3333/${shortId}`
    });
})

server.get('/:id', async (req, rep) => {
    await db.verifyLinkExpiration()

    const id = req.params.id

    const fullUrl = Array.from(await db.get(id))

    return rep.redirect(fullUrl[0].fulllink)
})

server.listen({
    port: 3333
}, () => console.log('Server ON'))