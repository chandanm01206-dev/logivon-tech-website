import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL || 'mongodb://localhost:27017';
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect().catch((err) => {
            console.warn('MongoDB connection warning:', err.message);
            return null;
        });
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect().catch((err) => {
        console.warn('MongoDB connection warning:', err.message);
        return null;
    });
}

export async function getDb() {
    try {
        const client = await clientPromise;
        if (!client) return null;
        const dbName = process.env.DB_NAME || 'logivon_tech';
        return client.db(dbName);
    } catch (e) {
        console.warn('Error getting MongoDB database:', e.message);
        return null;
    }
}

export default clientPromise;
