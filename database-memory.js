import { generate } from "shortid"
import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #urls = new Map()

    insert(url) {
        const shortId = generate()
        const id = randomUUID()

        const data = {
            full: url,
            short: shortId
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
}