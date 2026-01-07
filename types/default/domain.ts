export interface Domain {
    service: string,
    host: string,
    ssl: boolean,
    type: "dev" | "staging" | "prod"
}