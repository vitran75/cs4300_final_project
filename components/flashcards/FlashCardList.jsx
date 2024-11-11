import React, { useState } from 'react';
import Flashcard from './Flashcard';
import AddFlashcard from './AddFlashcard';
import './FlashcardList.css';


const FlashcardList = () => {
    const [flashcards, setFlashcards] = useState([]);

    const addFlashcard = (newFlashcard) => {
        setFlashcards([...flashcards, { ...newFlashcard, id: flashcards.length }]);
    };

    const editFlashcard = (id, updatedQuestion, updatedAnswer) => {
        const updatedFlashcards = flashcards.map(card => 
            card.id === id ? { ...card, question: updatedQuestion, answer: updatedAnswer } : card
        );
        setFlashcards(updatedFlashcards);
    };

    const deleteFlashcard = (id) => {
        setFlashcards(flashcards.filter(card => card.id !== id));
    };

    return (
        <div>
            <AddFlashcard onAdd={addFlashcard} />
            <div className="flashcard-list">
                {flashcards.map(card => (
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
