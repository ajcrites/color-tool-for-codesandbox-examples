import React from 'react';

export const HexInput = ({ hex, setHex }) => {
  const onChange = ({ target: { value } }) => {
    setHex(value);
  };

  return (
    <label>
      Hex:
      <input value={hex} onChange={onChange} />
    </label>
  );
};
