import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGO_AUTH_URL as string);
const db = client.db('social-serve-user');

export const auth = betterAuth({
   emailAndPassword: { 
    enabled: true, 
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
