import React, { useState } from "react";

function SumOfInteger() {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const sumOfArray = (arr) => {
    let sum = 0;
    for (let i of arr) {
      sum = sum + parseInt(i);
    }
    return sum;
  };
  return (
    <div>
      <h1>Sum Of all Integer Numbers </h1>
      <div>
        <input
          type="text"
          placeholder="Numbers by septaring ',' "
          onChange={(e) => setNumbers(e.target.value.split(","))}
        />
      </div>
      <div>{sumOfArray(numbers)}</div>
    </div>
  );
}

export default SumOfInteger;
