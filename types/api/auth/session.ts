import type { Account } from "../account";

export interface Session {
    account: Account;
    auth: {
        clid: string;
        token: string;
    }
}