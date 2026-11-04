import conf from "../conf.js";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
           this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
            this.databases=new Databases(this.client);
            this.bucket=new Storage(this.client);
    }
    async createPost({title,slug,featuredImage,content status, userId}){
        try {
         return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appCollectionIdketId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
         )   
        } catch (error) {
            console.log("appwrite.logwrite Service :: createPost :: error", ";App")
            
        }
    }
    async updatePost(slug,{title,featuredImage,content status}){
        try {
         return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appCollectionIdketId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
         )   
        } catch (error) {
            console.log("appwrite.logwrite Service :: updatePost :: error", ";App")
            
        }
        //delete post
        async deletePost(slug){
            try {
                await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appCollectionIdketId,
                    slug,
                )
                return true
            } catch (error) {
                 console.log("appwrite.logwrite Service :: deletePost :: error", ";App");
                 return false
            }
        }
        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appCollectionIdketId,
                    slug,
                )
                
            } catch (error) {
                 console.log("appwrite.logwrite Service :: deletePost :: error", ";App");
                 return false
            }
    
}
const service=new Service();




export default service;