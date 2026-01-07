import { Domains } from "../config/domains";
import type { Configuration, Domain } from "../types"
import { JWT } from "../util/jwt";

export class Instance {
    public readonly ClientID: string = "";
    public readonly stage: "dev" | "staging" | "prod"
    public readonly Hosts: Domain[]

    constructor(config: Configuration) {
        this.ClientID = config.ClientID;
        this.stage = config.stage ?? "prod";
        this.Hosts = Domains.filter((domain) => domain.type === this.stage);
    }

    getAuthDomain(): Domain | undefined {
        return this.Hosts.find((domain) => domain.service === "auth");
    }

    getAccountDomain(): Domain | undefined {
        return this.Hosts.find((domain) => domain.service === "account");
    }

    CreateAuthSession(identity: string) {
        return import("../handlers/api/auth/createAuthSession").then(({ createAuthSession }) => {
            return createAuthSession(this, identity);
        });
    }

    CreateIdentity(iss: string, sub: string, dn: string): string {
        const iat = Math.floor(Date.now() / 1000)
        return JWT({
            iat,
            exp: iat + 300,
            iss,
            sub,
            dn
        })
    }
}