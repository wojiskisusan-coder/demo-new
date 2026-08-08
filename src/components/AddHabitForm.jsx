import React, { useState } from 'react';

const AddHabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      addHabit(habitName);
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="habitName" className="text-gray-700">New Habit</label>
        <input
          type="text"
          id="habitName"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a new habit"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Habit
        </button>
      </div>
    </form>
  );
};

export default AddHabitForm;
