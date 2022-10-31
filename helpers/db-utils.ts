import { MongoClient } from "mongodb";

export const getAllDocuments = async (client, collection, sort, filter = {}) => {
   const db = client.db();
   return await db.collection('comments').find(filter).sort({ _id: sort }).toArray();
};

export const insertDocument = async (client, collection, data) => {
   const db = client.db();
   return await db.collection(collection).insertOne(data);
};

export const connectDatabase = async () => {
   return await MongoClient.connect('mongodb+srv://user:ebXxeffuTrHoqZ4e@cluster0.rujypjj.mongodb.net/?retryWrites=true&w=majority');
};
