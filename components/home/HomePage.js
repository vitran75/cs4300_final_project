"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js's Link
import sampleFlashcards from './SampleFlashcard';
import backgroundImage from './DecorImage/mountain.webp'; // Adjust the path as needed

function HomePage() {
  const [randomFlashcards, setRandomFlashcards] = useState([]);
  const [customFlashcards, setCustomFlashcards] = useState([]);
  const [showInputFields, setShowInputFields] = useState(false);
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');

  const handleGenerateFlashcards = () => {
    const shuffledFlashcards = [...sampleFlashcards].sort(() => 0.5 - Math.random());
    setRandomFlashcards(shuffledFlashcards.slice(0, 3));
  };

  const handleAddFlashcard = () => {
    setShowInputFields(true);
  };

  const handleSubmitFlashcard = (event) => {
    event.preventDefault();
    if (frontText && backText) {
      const newFlashcard = {
        id: customFlashcards.length + randomFlashcards.length + 1,
        frontText,
        backText,
      };
      setCustomFlashcards([...customFlashcards, newFlashcard]);
      setFrontText('');
      setBackText('');
      setShowInputFields(false);
      console.log("New flashcard created:", newFlashcard);
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>OneFlash</h1>
          <h2 style={{ color: 'red' }}>One flash at a time.</h2>
          <nav>
            {/* Replace react-router-dom Links with Next.js Links */}
            <Link href="/login">
              <button style={styles.button}>Login</button>
            </Link>
            <Link href="/register">
              <button style={styles.button}>Register</button>
            </Link>
          </nav>
        </header>

        <h3>Welcome to the Flashcard App</h3>

        <button onClick={handleGenerateFlashcards} style={styles.button}>
          Generate Random Flashcards
        </button>

        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
          {randomFlashcards.map((flashcard) => (
            <Flashcard key={flashcard.id} flashcard={flashcard} />
          ))}
        </div>

        <h3>Create Your Own Flashcards</h3>

        {showInputFields && (
          <form onSubmit={handleSubmitFlashcard} style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Front Text"
              value={frontText}
              onChange={(e) => setFrontText(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            <input
              type="text"
              placeholder="Back Text"
              value={backText}
              onChange={(e) => setBackText(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        )}

        <button onClick={handleAddFlashcard} style={styles.button}>
          Add New Flashcard
        </button>

        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
          {customFlashcards.map((flashcard) => (
            <Flashcard key={flashcard.id} flashcard={flashcard} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Flashcard component with flip functionality
function Flashcard({ flashcard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleFlip}
      style={{
        perspective: '1000px',
        width: '300px',
        height: '400px',
        margin: '1rem',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s',
          position: 'relative',
          width: '100%',
          height: '100%',
          border: '1px solid #ddd',
          padding: '1rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
      >
        {/* Front side */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: isFlipped ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <p style={{ fontSize: '1.2rem' }}>
            <strong>Front:</strong> {flashcard.frontText}
          </p>
        </div>

        {/* Back side */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: isFlipped ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            transform: 'rotateY(180deg)',
          }}
        >
          <p style={{ fontSize: '1.2rem' }}>
            <strong>Back:</strong> {flashcard.backText}
          </p>
        </div>
      </div>
    </div>
  );
}

// Styles object for the background and container
const styles = {
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
    padding: '2rem',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '1000px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '1rem',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '1.2rem',
    padding: '0.75rem 1.5rem',
    margin: '0.5rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default HomePage;

