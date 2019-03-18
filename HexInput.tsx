import React, { useContext } from 'react';
import { ColorToolContext } from '~/ColorToolAppContext';

export const HexInput = () => {
  const { hex, dispatch } = useContext(ColorToolContext);
  const onChange = ({ target: { value } }) => {
    dispatch({ type: 'UPDATE_HEX', payload: value })
  };

  return (
    <label>
      Hex:
      <input value={hex} onChange={onChange} />
    </label>
  );
};
