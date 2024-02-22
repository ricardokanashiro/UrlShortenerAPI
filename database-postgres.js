import { randomUUID } from 'node:crypto'
import { sql } from './db-config.js'
import { generate } from 'shortid'

export class DatabasePostgres {
    async create(url) {
        const linkAlreadyExists = await sql`select * from links where fulllink = ${url}`

        if(Array.from(linkAlreadyExists).length !== 0) {
            return linkAlreadyExists[0].shortlink
        }

        const shortId = generate()
        const id = randomUUID()

        const currentDate = new Date()
        currentDate.setMonth(currentDate.getMonth() + 1)

        await sql`insert into links (id, fulllink, shortlink, expiration) values (${id},${url}, ${shortId}, ${currentDate})`

        return shortId
    }

    async get(shorturl) {
        return await sql`select * from links where shortlink = 'UjQ8DE6tZ'`
    }

    async list() {
        return await sql`select * from links`
    }

    async verifyLinkExpiration() {
        const links = await sql`select * from links`

        const currentDate = new Date()

        links.forEach(async (link) => {
            if(link.expiration <= currentDate) {
                await sql`delete from links where id = ${link.id}`
            }
        })
    }
}