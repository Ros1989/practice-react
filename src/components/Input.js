import React, { useState } from 'react';

const Input = function () {
  const [value, setValue] = useState('Some text in inpet');
  return (
    <>
      <h1>{value}</h1>
      <input
        type
        text="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </>
  );
};

export default Input;
