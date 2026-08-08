import React from 'react';

const HabitList = ({ habits, incrementCount }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Habits</h2>
      <ul className="space-y-4">
        {habits.map((habit) => (
          <li key={habit.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
            <span className="text-gray-800">{habit.name}</span>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{habit.count}</span>
              <button
                onClick={() => incrementCount(habit.id)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
