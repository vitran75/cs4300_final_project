import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import AddFlashcard from './AddFlashcard';
import './FlashcardList.css';

const FlashcardList = ({userCreds}) => {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch flashcards on component mount
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

    const editFlashcard = (id, updatedQuestion, updatedAnswer) => {
        const updatedFlashcards = flashcards.map((card) =>
            card.id === id
                ? { ...card, question: updatedQuestion, answer: updatedAnswer }
                : card
        );
        setFlashcards(updatedFlashcards);
    };

    const deleteFlashcard = (id) => {
        setFlashcards(flashcards.filter((card) => card.id !== id));
    };

    return (
        <div>
            <AddFlashcard onAdd={addFlashcard} />
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <div className="flashcard-list">
                {flashcards.map((card) => (
                    <Flashcard
                        key={card.id}
                        id={card.id}
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
