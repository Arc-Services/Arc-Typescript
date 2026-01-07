export interface Configuration {
    Authorization?: string,
    ClientID: string,
    stage?: "dev" | "staging" | "prod"
}