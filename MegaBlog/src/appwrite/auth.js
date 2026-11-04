import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setEndpoint(conf.appwriteProjectID)
        this.account=new Account(this.client)

    }
    async createAccount({email,password,name}){
        
    }

}

const authservice=new AuthService();


export default authservice;