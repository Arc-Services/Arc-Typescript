import type { Domain } from "../types";

export const Domains: Domain[] = [
    {
        service: "auth",
        host: "dev-auth-v1.arc-services.dev",
        ssl: true,
        type: "dev"
    },
    {
        service: "account",
        host: "dev-account-v1.arc-services.dev",
        ssl: true,
        type: "dev"
    },
    {
        service: "auth",
        host: "staging-auth-v1.arc-services.dev",
        ssl: true,
        type: "staging"
    },
    {
        service: "account",
        host: "staging-account-v1.arc-services.dev",
        ssl: true,
        type: "staging"
    },
    {
        service: "auth",
        host: "prod-auth-v1.arc-services.dev",
        ssl: true,
        type: "prod"
    },
    {
        service: "account",
        host: "prod-account-v1.arc-services.dev",
        ssl: true,
        type: "prod"
    }
]