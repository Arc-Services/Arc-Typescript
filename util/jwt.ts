import { base64url } from "./base64";

export function JWT(payload: any): string {
    return `${base64url({ alg: "none", typ: "JWT" })}.${base64url(payload)}.`;
}