import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined. Add it to .env.local");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(mongoUri, options);
clientPromise = client.connect();

export default clientPromise;
