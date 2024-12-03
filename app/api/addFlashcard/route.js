import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const email = session.user.email;
        const { question, answer } = await request.json();

        if (!question || !answer) {
            return NextResponse.json(
                { error: "Both question and answer are required." },
                { status: 400 }
            );
        }

        await connectMongoDB();

    
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $push: { flashcards: { question, answer } } }, 
            { new: true, upsert: true } 
        );

        const addedFlashcard = updatedUser.flashcards[updatedUser.flashcards.length - 1];

        return NextResponse.json(
            { message: "Flashcard added successfully", flashcard: addedFlashcard },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error adding flashcard:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
