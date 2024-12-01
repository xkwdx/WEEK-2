import React, { useState } from 'react';

const Counters = () => {
  const [counters, setCounters] = useState(Array(20).fill(0));

  const incrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
  };

  return (
    <div>
      {counters.map((count, index) => (
        <button key={index} onClick={() => incrementCounter(index)}>
          Counter {index + 1}: {count}
        </button>
      ))}
    </div>
  );
};

export default Counters;