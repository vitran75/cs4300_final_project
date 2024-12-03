import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const email = session.user.email;

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id"); 

        if (!id) {
            return NextResponse.json(
                { error: "Flashcard ID is required as a query parameter." },
                { status: 400 }
            );
        }

        await connectMongoDB();

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $pull: { flashcards: { _id: id } } }, 
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json(
                { error: "User not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Flashcard deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting flashcard:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
