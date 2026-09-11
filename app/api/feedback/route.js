import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '@/lib/mongodb';

// In-memory fallback if MongoDB is unreachable
let memoryFeedback = [];

function setCorsHeaders(response) {
    response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
}

export async function OPTIONS() {
    return setCorsHeaders(new NextResponse(null, { status: 204 }));
}

export async function GET() {
    try {
        const db = await getDb();
        if (db) {
            const feedback = await db
                .collection('feedback')
                .find({})
                .sort({ createdAt: -1 })
                .limit(100)
                .toArray();

            const cleaned = feedback.map(({ _id, ...rest }) => rest);
            return setCorsHeaders(NextResponse.json(cleaned));
        }
    } catch (err) {
        console.warn('MongoDB GET error, falling back to memory store:', err.message);
    }

    // Return in-memory items sorted descending
    const sorted = [...memoryFeedback].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return setCorsHeaders(NextResponse.json(sorted));
}

export async function POST(request) {
    try {
        const body = await request.json();

        if (!body || !body.name || !body.message) {
            return setCorsHeaders(
                NextResponse.json(
                    { error: 'name and message are required' },
                    { status: 400 }
                )
            );
        }

        const rawRating = Number(body.rating);
        const rating = Number.isFinite(rawRating) ? Math.min(5, Math.max(1, Math.round(rawRating))) : 5;

        const feedbackObj = {
            id: uuidv4(),
            name: String(body.name).trim().slice(0, 80),
            role: body.role ? String(body.role).trim().slice(0, 120) : '',
            message: String(body.message).trim().slice(0, 800),
            rating,
            createdAt: new Date().toISOString(),
        };

        try {
            const db = await getDb();
            if (db) {
                await db.collection('feedback').insertOne({ ...feedbackObj });
            } else {
                memoryFeedback.unshift(feedbackObj);
            }
        } catch (dbErr) {
            console.warn('MongoDB POST failed, using memory store:', dbErr.message);
            memoryFeedback.unshift(feedbackObj);
        }

        return setCorsHeaders(NextResponse.json(feedbackObj, { status: 201 }));
    } catch (err) {
        return setCorsHeaders(
            NextResponse.json(
                { error: 'Invalid JSON body or server error' },
                { status: 400 }
            )
        );
    }
}
