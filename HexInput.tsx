import React, { useContext } from 'react';
import { ColorToolContext } from '~/ColorToolAppContext';

export const HexInput = () => {
  const { hex, setHex, setRgba } = useContext(ColorToolContext);
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
