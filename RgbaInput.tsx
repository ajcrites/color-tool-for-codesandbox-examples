import React, { useRef } from 'react';

export const RgbaInput = ({ rgba, setRgba }) => {
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const onChange = () => {
    const colorValues = inputs.map(({ current: { value } }) => value);

    setRgba(colorValues);
  };

  return (
    <label>
      RGB(A):
      {inputs.map((input, idx) => (
        <input onChange={onChange} key={'rgba ' + idx} ref={input} />
      ))}
    </label>
  );
};
