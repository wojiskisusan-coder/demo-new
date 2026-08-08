import React, { useState } from 'react';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import StatsCard from './components/StatsCard';

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Drink water', count: 0 },
    { id: 2, name: 'Exercise', count: 0 },
    { id: 3, name: 'Read', count: 0 },
  ]);

  const addHabit = (name) => {
    const newHabit = { id: habits.length + 1, name, count: 0 };
    setHabits([...habits, newHabit]);
  };

  const incrementCount = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, count: habit.count + 1 } : habit
    ));
  };

  const totalHabits = habits.length;
  const totalCounts = habits.reduce((sum, habit) => sum + habit.count, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Habit Tracker</h1>
        <AddHabitForm addHabit={addHabit} />
        <StatsCard totalHabits={totalHabits} totalCounts={totalCounts} />
        <HabitList habits={habits} incrementCount={incrementCount} />
      </div>
    </div>
  );
};

export default App;
