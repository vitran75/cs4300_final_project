import mongoose, { Schema, models } from "mongoose";

// flashcard schema 
const flashcardSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true, 
  },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    flashcards: {
      type: [flashcardSchema], // array of flashcard objects
      default: [], // default has no cards
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
