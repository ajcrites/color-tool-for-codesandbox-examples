import React, { useContext } from 'react';
import { ColorToolContext } from '~/ColorToolAppContext';
import { updateHex } from '~/colorReducer';

export const HexInput = () => {
  const { hex, dispatch } = useContext(ColorToolContext);
  const onChange = ({ target: { value } }) => {
    dispatch(updateHex(value));
  };

  return (
    <label>
      Hex:
      <input value={hex} onChange={onChange} />
    </label>
  );
};
