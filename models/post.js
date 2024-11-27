import mongoose, { Schema, models } from "mongoose";

const postSchema = new Schema(
    {
      Questions: {
        type: String,
        required: true,
      },
      Answer: {
        type: String,
        required: true,
      }
    });
      
  
  const post = models.post || mongoose.model("flashcard", FlashcardSchema);
  export default User;
