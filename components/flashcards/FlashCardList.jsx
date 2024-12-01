import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import AddFlashcard from "./AddFlashcard";
import "./FlashcardList.css";

const FlashcardList = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchFlashcards = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await fetch("/api/getFlashcard");
                if (!response.ok) {
                    throw new Error("Failed to fetch flashcards");
                }
                const data = await response.json();
                setFlashcards(data.flashcards);
            } catch (err) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchFlashcards();
    }, []);

    const addFlashcard = async (newFlashcard) => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("/api/addFlashcard", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFlashcard),
            });
            if (!response.ok) {
                throw new Error("Failed to add flashcard");
            }
            const { flashcard } = await response.json(); 
            setFlashcards([...flashcards, flashcard]); 
        } catch (err) {
            setError(err.message || "An error occurred while adding the flashcard");
        } finally {
            setLoading(false);
        }
    };
    
    const editFlashcard = async (id, updatedQuestion, updatedAnswer) => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("/api/editFlashcard", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    question: updatedQuestion,
                    answer: updatedAnswer,
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to edit flashcard");
            }
            const { flashcard } = await response.json();
    
            // Update the state with the edited flashcard
            setFlashcards(flashcards.map((card) =>
                card._id === id ? { ...card, question: flashcard.question, answer: flashcard.answer } : card
            ));
        } catch (err) {
            setError(err.message || "An error occurred while editing the flashcard");
        } finally {
            setLoading(false);
        }
    };
    

    const deleteFlashcard = async (id) => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`/api/deleteFlashcard?id=${encodeURIComponent(id)}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete flashcard");
            }
            setFlashcards(flashcards.filter((card) => card._id !== id));
        } catch (err) {
            setError(err.message || "An error occurred while deleting the flashcard");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <AddFlashcard onAdd={addFlashcard} />
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <div className="flashcard-list">
                {flashcards.map((card) => (
                    <Flashcard
                        key={card._id}
                        id={card._id}
                        question={card.question}
                        answer={card.answer}
                        onEdit={editFlashcard}
                        onDelete={deleteFlashcard}
                    />
                ))}
            </div>
        </div>
    );
};

export default FlashcardList;
