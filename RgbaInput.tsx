import React from 'react';

export const RgbaInput = ({ rgba, setRgba }) => {
  const onChange = idx => ({ target: { value } }) => {
    const newRgba = [...rgba];
    newRgba[idx] = value;

    setRgba(newRgba);
  };

  return (
    <label>
      RGB(A):
      <input value={rgba[0]} onChange={onChange(0)} />
      <input value={rgba[1]} onChange={onChange(1)} />
      <input value={rgba[2]} onChange={onChange(2)} />
      <input value={rgba[3]} onChange={onChange(3)} />
    </label>
  );
}
