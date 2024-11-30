import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import AddFlashcard from './AddFlashcard';
import './FlashcardList.css';

const FlashcardList = ({userCreds}) => {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch all flashcards when the component loads
    useEffect(() => {
        const fetchFlashcards = async () => {
            setLoading(true);
            setError('');
            try {
                const email = "789"; // Replace with the actual user's email
                const response = await fetch(`/api/getFlashcard?email=${encodeURIComponent(email)}`); // Pass email as query param
                if (!response.ok) {
                    throw new Error('Failed to fetch flashcards');
                }
                const data = await response.json();
                setFlashcards(data.flashcards); // Assuming API returns { flashcards: [...] }
            } catch (err) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };
    
        fetchFlashcards();
    }, []);
    

    const storeFlashcard = async (newFlashcard) => {
        setLoading(true);
        setError('');
        try {
            const email = "789"; // Replace with the actual user's email
            const response = await fetch(`/api/addFlashcard?email=${encodeURIComponent(email)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFlashcard), // Only send the question and answer in the body
            });
            if (!response.ok) {
                throw new Error('Failed to store flashcard');
            }
            const savedFlashcard = await response.json();
            setFlashcards([...flashcards, savedFlashcard]); // Update state with the newly saved flashcard
        } catch (err) {
            setError(err.message || 'An error occurred while storing the flashcard');
        } finally {
            setLoading(false);
        }
    };
    
    

    const addFlashcard = (newFlashcard) => {
        storeFlashcard(newFlashcard);
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
