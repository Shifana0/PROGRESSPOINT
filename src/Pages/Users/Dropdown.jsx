import React from 'react';

const Dropdown = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <select>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
