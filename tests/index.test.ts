import { it } from "bun:test"
import * as Arc from "../"

it("Makes new Arc.Instance(options) & creates auth session", async () => {
    const configuration: Arc.Configuration = {
        ClientID: "rokzoyzmxxjqekqdqkipgkdueoybqjqo",
        stage: "dev"
    }
    const instance = new Arc.Instance(configuration)
    console.log("session:", await instance.CreateAuthSession(instance.CreateIdentity("Stellar-Fortnite", "123", "andrew")))
})