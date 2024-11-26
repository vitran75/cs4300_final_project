// src/components/SampleFlashcard.js
import flashcard1 from './SampleImage/flashcard1.png';
import flashcard2 from './SampleImage/flashcard2.webp';
import flashcard3 from './SampleImage/flashcard3.png';
import flashcard4 from './SampleImage/flashcard4.webp';
import flashcard5 from './SampleImage/flashcard5.jpg';
import flashcard6 from './SampleImage/flashcard6.png';
import flashcard7 from './SampleImage/flashcard7.jpg';
import flashcard8 from './SampleImage/flashcard8.png';
import flashcard9 from './SampleImage/flashcard9.webp';
import flashcard10 from './SampleImage/flashcard10.png';


const sampleFlashcards = [
    { id: 1, title: 'Flashcard 1', image: flashcard1, frontText: 'Standard markup lang for web page creation?', backText: 'HTML' },
    { id: 2, title: 'Flashcard 2', image: flashcard2, frontText: 'Address of a web page?', backText: 'URL' },
    { id: 3, title: 'Flashcard 3', image: flashcard3, frontText: 'Lang to control page layout?', backText: 'CSS' },
    { id: 4, title: 'Flashcard 4', image: flashcard4, frontText: 'Color by hex value?', backText: 'RGB color' },
    { id: 5, title: 'Flashcard 5', image: flashcard5, frontText: 'Method to create/initialize a class object?', backText: 'Constructor' },
    { id: 6, title: 'Flashcard 6', image: flashcard6, frontText: 'HTML tags for creating page sections?', backText: '<div></div>' },
    { id: 7, title: 'Flashcard 7', image: flashcard7, frontText: 'How many HTML heading levels?', backText: '6' },
    { id: 8, title: 'Flashcard 8', image: flashcard8, frontText: 'T/F: JS functions are objects.', backText: 'True' },
    { id: 9, title: 'Flashcard 9', image: flashcard9, frontText: 'T/F: JS is single threaded.', backText: 'True' },
    { id: 10, title: 'Flashcard 10', image: flashcard10, frontText: 'HTTP request to retrieve items', backText: 'GET' }
];

export default sampleFlashcards;