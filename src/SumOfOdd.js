import React, { useState } from "react";

function SumOfOdd() {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);

  const sumOfOdd = (start, end) => {
    let sum = 0;

    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        sum = sum + i;
      }
    }
    return sum;
  };
  return (
    <div>
      <h1>Sum Of Odd Numbers in given range </h1>
      <input
        placeholder="Enter Start Value"
        type="number"
        name="start"
        onChange={(e) => {
          setStart(e.target.value);
        }}
      />
      <input
        placeholder="Enter end Value"
        type="number"
        name="end"
        onChange={(e) => {
          setEnd(e.target.value);
        }}
      />
      <div>
        Sum Of OddNumbers: {sumOfOdd(parseInt(start), parseInt(end))}
        {}
      </div>
    </div>
  );
}

export default SumOfOdd;
