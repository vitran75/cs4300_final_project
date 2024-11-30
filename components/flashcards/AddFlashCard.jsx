import React, { useState } from 'react';

const AddFlashcard = ({ onAdd }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question && answer) {
            onAdd({ question, answer });
            setQuestion('');
            setAnswer('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-flashcard-form">
            <h2>Add a New Flashcard</h2>
            <input 
                type="text" 
                placeholder="Question" 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Answer" 
                value={answer} 
                onChange={(e) => setAnswer(e.target.value)} 
                required 
            />
            <button type="submit">Add Flashcard</button>
        </form>
    );
};

export default AddFlashcard;