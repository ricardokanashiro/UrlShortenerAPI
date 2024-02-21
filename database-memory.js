import { generate } from "shortid"
import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #urls = new Map()

    insert(url) {
        const linkAlreadyExists = this.list().find(
            link => link.full === url
        )

        if(linkAlreadyExists) {
            return linkAlreadyExists.short
        }

        const shortId = generate()
        const id = randomUUID()

        const currentDate = new Date()
        currentDate.setMonth(currentDate.getMonth() + 1)

        const data = {
            full: url,
            short: shortId,
            expiration: currentDate
        }

        this.#urls.set(id, data)

        return data.short
    }

    get(shorturl) {
        return Array.from(this.#urls.values()).filter(url => url.short === shorturl)
    }

    list() {
        return Array.from(this.#urls.values())
    }

    verifyLinkExpiration() {
        const links = Array.from(this.#urls.entries()).map(
            link => {
                return {
                    id: link[0],
                    full: link[1].full,
                    short: link[1].short,
                    expiration: link[1].expiration
                }
            }
        )

        const currentDate = new Date()

        links.forEach(link => {
            if(link.expiration <= currentDate) {
                this.#urls.delete(link.id)
            }
        })
    }
}