import React, { useContext, useRef } from 'react';
import { ColorToolContext } from '~/ColorToolAppContext';

export const RgbaInput = () => {
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const { rgba, dispatch } = useContext(ColorToolContext);
  const onChange = () => {
    const colorValues = inputs.map(({ current: { value } }) => value);

    dispatch({ type: 'UPDATE_RGBA', payload: colorValues });
  };

  return (
    <label>
      RGB(A):
      {inputs.map((input, idx) => (
        <input onChange={onChange} key={'rgba ' + idx} ref={input} value={rgba[idx]} />
      ))}
    </label>
  );
};
