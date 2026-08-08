import React from 'react';

const StatsCard = ({ totalHabits, totalCounts }) => {
  return (
    <div className="p-4 bg-blue-50 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Statistics</h2>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-gray-600">Total Habits</p>
          <p className="text-2xl font-bold text-blue-600">{totalHabits}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">Total Counts</p>
          <p className="text-2xl font-bold text-blue-600">{totalCounts}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
