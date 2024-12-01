import React, { useState } from "react";

const Flashcard = ({ id, question, answer, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newQuestion, setNewQuestion] = useState(question);
    const [newAnswer, setNewAnswer] = useState(answer);

    const handleSave = () => {
        if (newQuestion.trim() === "" || newAnswer.trim() === "") {
            alert("Question and Answer cannot be empty.");
            return;
        }
        onEdit(id, newQuestion, newAnswer); 
        setIsEditing(false); 
    };

    return (
        <div className="flashcard">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        placeholder="Edit question"
                    />
                    <input
                        type="text"
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                        placeholder="Edit answer"
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <p><strong>Question:</strong> {question}</p>
                    <p><strong>Answer:</strong> {answer}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Flashcard;
