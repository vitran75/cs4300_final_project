"use client";
import React, { useState } from 'react';

const GradeCalculator = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [grade, setGrade] = useState('');
  const [weight, setWeight] = useState('');
  const [finalGrade, setFinalGrade] = useState(null);

  // Add item to the list (item name, grade, weight)
  const addItem = () => {
    if (!itemName || !grade || !weight) {
      alert('Please fill out all fields: Item, Grade, and Weight.');
      return;
    }

    const newItem = {
      name: itemName,
      grade: parseFloat(grade),
      weight: parseFloat(weight),
    };

    setItems([...items, newItem]);
    setItemName('');
    setGrade('');
    setWeight('');
  };

  // Calculate final grade based on weighted scores
  const calculateFinalGrade = () => {
    const totalWeight = items.reduce((acc, item) => acc + item.weight, 0);
    const weightedGradeSum = items.reduce(
      (acc, item) => acc + (item.grade * item.weight),
      0
    );

    if (totalWeight !== 100) {
      setFinalGrade('The total weight must add up to 100%.');
      return;
    }

    const weightedAverage = weightedGradeSum / totalWeight;

    let gradeLetter = '';
    if (weightedAverage >= 90) {
      gradeLetter = 'A';
    } else if (weightedAverage >= 80) {
      gradeLetter = 'B';
    } else if (weightedAverage >= 70) {
      gradeLetter = 'C';
    } else if (weightedAverage >= 60) {
      gradeLetter = 'D';
    } else {
      gradeLetter = 'F';
    }

    setFinalGrade(`Your final weighted grade is ${weightedAverage.toFixed(2)}%. You got a ${gradeLetter}.`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white-100 py-12 px-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Course Grade Calculator</h1>

        {/* Input fields for adding new item (grade and weight) */}
        <div className="mb-4">
          <label htmlFor="itemName" className="block text-lg font-medium text-gray-700">Item Name (e.g., Exam, Assignment):</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="grade" className="block text-lg font-medium text-gray-700">Grade (in percentage):</label>
          <input
            type="number"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            min="0"
            max="100"
            className="w-full p-3 mt-2 border border-whtie-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="weight" className="block text-lg font-medium text-gray-700">Weight (in percentage):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            min="0"
            max="100"
            className="w-full p-3 mt-2 border border-white-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="button"
          onClick={addItem}
          className="w-full py-3 mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Item
        </button>

        {/* Show added items */}
        <div className="mt-6">
          <h2 className="text-lg text-gray-700 font-semibold mb-2">Items Added:</h2>
          <ul className="list-disc pl-6">
            {items.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item.name} - Grade: {item.grade}%, Weight: {item.weight}%
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={calculateFinalGrade}
          className="w-full py-3 mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Calculate Final Grade
        </button>

        {/* Show final calculated grade */}
        {finalGrade && <p className="mt-4 text-lg text-gray-800">{finalGrade}</p>}
      </div>
    </div>
  );
};

export default GradeCalculator;
