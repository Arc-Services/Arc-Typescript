import type { Instance } from "../../../classes";
import type { Domain } from "../../../types";
import type { Session } from "../../../types/api/auth";

export async function createAuthSession(instance: Instance, identity: string): Promise<Session> {
    const domain: Domain | undefined = instance.getAuthDomain();
    if (!domain) {
        throw new Error("Auth domain not found for the specified stage.");
    }

    const protocol = domain.ssl ? "https" : "http";
    const url = `${protocol}://${domain.host}/api/v1/auth/session`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "X-Arc-Client": instance.ClientID,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ identity })
    }).catch((error) => {
        throw new Error(`error: ${error.message}`);
    });

    if (!response.ok) {
        throw new Error(`failed to create auth session: ${response.status} ${response.statusText}`);
    }

    const data: Session = await response.json().catch((error) => {
        throw new Error(`error parsing response JSON: ${error.message}`);
    });

    return data;
}