import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const email = session.user.email;
        const { id, question, answer } = await request.json();

        if (!id || !question || !answer) {
            return NextResponse.json(
                { error: "Flashcard ID, question, and answer are required." },
                { status: 400 }
            );
        }

        await connectMongoDB();

        const updatedUser = await User.findOneAndUpdate(
            { email, "flashcards._id": id }, 
            { $set: { "flashcards.$.question": question, "flashcards.$.answer": answer } }, 
            { new: true } 
        );

        if (!updatedUser) {
            return NextResponse.json(
                { error: "Flashcard not found." },
                { status: 404 }
            );
        }

    
        const updatedFlashcard = updatedUser.flashcards.find((card) => card._id.toString() === id);

        return NextResponse.json(
            { message: "Flashcard updated successfully", flashcard: updatedFlashcard },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating flashcard:", error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
