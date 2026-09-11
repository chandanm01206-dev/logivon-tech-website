import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL;
const options = {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
};

let clientPromise;

if (!uri) {
    clientPromise = Promise.resolve(null);
} else if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        try {
            const client = new MongoClient(uri, options);
            global._mongoClientPromise = client.connect().catch((err) => {
                console.warn('MongoDB connection warning:', err.message);
                return null;
            });
        } catch (e) {
            console.warn('MongoDB init warning:', e.message);
            global._mongoClientPromise = Promise.resolve(null);
        }
    }
    clientPromise = global._mongoClientPromise;
} else {
    try {
        const client = new MongoClient(uri, options);
        clientPromise = client.connect().catch((err) => {
            console.warn('MongoDB connection warning:', err.message);
            return null;
        });
    } catch (e) {
        console.warn('MongoDB init warning:', e.message);
        clientPromise = Promise.resolve(null);
    }
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

