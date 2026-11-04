import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
        );

        if (userAccount) {
            return this.login({ email, password });
        }

        return userAccount;
    }

    async login({ email, password }) {
        return await this.account.createEmailSession(
            email,
            password
        );
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch {
            return null;
        }
    }

    async logout() {
        return await this.account.deleteSessions();
    }
}

const authservice = new AuthService();

export default authservice;
