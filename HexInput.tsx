import React from 'react';

export const HexInput = ({ hex, setHex, setRgba }) => {
  const onChange = ({ target: { value } }) => {
    setHex(value);
    setRgba(value);
  };

  return (
    <label>
      Hex:
      <input value={hex} onChange={onChange} />
    </label>
  );
};
