"use client";
import React from 'react';
import FlashcardList from '../flashcards/FlashCardList';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to  One-Flash</h1>
                <p>Organize, create, and review your flashcards all in one place.</p>
            </header>
            
            <main className="flashcard-section">
                <FlashcardList />
            </main>
        </div>
    );
};

export default HomePage;
